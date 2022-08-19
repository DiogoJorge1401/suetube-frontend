import { useEffect, useState } from 'react'
import { client } from '../../api/client'
import { useAppSelector } from '../../redux/store'
import { Comment } from '../Comment/Comment'
import { Avatar, Button, Container, Input, InputArea, NewComment, SubmitButtons } from './Components'

interface CommentsProps {
  videoId: string
}

export const Comments = ({ videoId }: CommentsProps) => {
  const { currentUser } = useAppSelector((state) => state.user)

  const [comments, setComments] = useState<any[]>([])
  const [description, setDescription] = useState('')
  const [showSubmitButton, setShowSubmitButton] = useState(false)

  useEffect(() => {
    ; (async () => {

      const videoRes = await client.get(`/videos/find/${videoId}`)
      const res = await client.get(`/comments/${videoId}`)

      setComments(res.data)

    })()

  }, [videoId])

  const handleClick = async () => {
    if (!description) return

    const res = await client.post('/comments', { videoId, description })

    setComments(p => [res.data, ...p])

    setDescription('')
  }

  return (
    <Container>
      {
        currentUser
        &&
        <NewComment>
          <Avatar
            src={currentUser.img}
          />
          
          <InputArea>
            <Input
              placeholder='Add a comment ...'
              value={description}
              onChange={e => setDescription(e.target.value)}
              onFocus={() => setShowSubmitButton(true)}
            />

            {
              showSubmitButton
              &&
              <SubmitButtons>
                <Button type='canceal'
                  onClick={() => setShowSubmitButton(false)}
                >
                  Canceal
                </Button>

                <Button type='submit' onClick={handleClick}>
                  Comment
                </Button>
              </SubmitButtons>
            }

          </InputArea>

        </NewComment>
      }

      {comments.map(comment => (
        <Comment key={comment._id} comment={comment} />
      ))}
    </Container>
  )
}
