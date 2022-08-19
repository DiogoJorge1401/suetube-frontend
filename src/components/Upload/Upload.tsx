import { useEffect, useState } from 'react'
import {
  Button,
  Close,
  Container,
  FileWrapper,
  Input, Label, TextArea, Title, Wrapper
} from './Components'

import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import { client } from '../../api/client'
import { app } from '../../api/firebase'
import { useNavigate } from 'react-router-dom'

interface UploadProps {
  setOpenPopUp(b: boolean): void
}

export const Upload = ({ setOpenPopUp }: UploadProps) => {

  const [img, setImg] = useState<any>(null)
  const [video, setVideo] = useState<any>(null)
  const [imgPercentage, setImgPercentage] = useState(0)
  const [videoPercentage, setVideoPercentage] = useState(0)
  const [inputs, setInputs] = useState<any>({})

  const [isUploading, setIsUploading] = useState(false)

  const navigate = useNavigate()

  useEffect(() => {
    if (
      videoPercentage >= 100 &&
      imgPercentage >= 100 &&
      inputs.imgURL &&
      inputs.videoURL
    ) {
      ; (async () => {
        const { data } = await client.post('/videos', inputs)

        setOpenPopUp(false)

        setImgPercentage(0)

        setVideoPercentage(0)

        setInputs({})

        navigate(`/video/${data._id}`)

      })()
    }
  }, [inputs])

  const handleChange = (e: any) => {
    setInputs((p: any) => ({ ...p, [e.target.name]: e.target.value }))
  }

  const handleTags = (e: any) => {
    setInputs((p: any) => ({ ...p, tags: e.target.value.split(',') }))
  }

  const handleClick = () => {

    if (
      !inputs.description ||
      !inputs.title ||
      !img ||
      !video
    ) return

    if (videoPercentage < 100 && imgPercentage < 100) {
      setIsUploading(true)
      uploadFile(video, 'videoURL')
      uploadFile(img, 'imgURL')
      return
    }
  }

  const uploadFile = (file: any, urlType: 'imgURL' | 'videoURL') => {
    if (!file) return
    const storage = getStorage(app)
    const fileName = new Date().getTime() + file.name
    const storageRef = ref(storage, fileName)

    const uploadTask = uploadBytesResumable(storageRef, file);


    uploadTask.on('state_changed',
      (snapshot) => {
        const progress = +((snapshot.bytesTransferred / snapshot.totalBytes) * 100).toFixed(2);

        urlType === 'imgURL' ? setImgPercentage(progress) : setVideoPercentage(progress)

        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused');
            break;
          case 'running':
            console.log('Upload is running');
            break;
        }
      },
      (error) => { },
      () => {
        getDownloadURL(uploadTask.snapshot.ref)
          .then((downloadURL) => {
            setInputs((p: any) => ({ ...p, [urlType]: downloadURL }))
          });
      }
    );

  }

  return (
    <Container>
      <Wrapper>
        <Close
          onClick={() => setOpenPopUp(false)}
          disabled={isUploading}
        >
          X
        </Close>

        <Title>Upload a New Video</Title>

        <FileWrapper>
          <Label htmlFor='video'>Video:</Label>

          {
            videoPercentage > 0
              ? `Uploading ${videoPercentage}%`
              : <Input
                type='file'
                accept='video/*'
                id='video'
                onChange={e => setVideo((e.target.files as any)[0])}
              />
          }
        </FileWrapper>

        <Input
          type='text'
          placeholder='Title'
          name='title'
          onChange={handleChange}
        />

        <TextArea
          placeholder='Description'
          rows={8}
          name='description'
          onChange={handleChange}
        />

        <Input
          type='text'
          placeholder='Tags (Separate the tags with commans.)'
          onChange={handleTags}
        />

        <FileWrapper>
          <Label htmlFor='image'>Image:</Label>

          {
            imgPercentage > 0
              ? `Uploading ${imgPercentage}%`
              : <Input
                type='file'
                accept='image/*'
                id='image'
                onChange={e => setImg((e.target.files as any)[0])}
              />
          }
        </FileWrapper>

        <Button onClick={handleClick}>Upload</Button>
      </Wrapper>
    </Container>
  )
}
