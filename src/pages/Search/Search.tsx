import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { client } from '../../api/client'
import { Card } from '../../components/Card/Card'
import { Container } from './Components'

export const Search = () => {
  const [videos, setVideos] = useState<any[]>([])
  const { title } = useParams()

  useEffect(() => {
    ; (async () => {
      try {
        const res = await client.get(`/videos/search/${title}`)

        setVideos(res.data)
      } catch (error) { }
    })()
  }, [title])

  return (
    <Container>
      {videos.map(video => <Card key={video._id} video={video} />)}
    </Container>
  )
}
