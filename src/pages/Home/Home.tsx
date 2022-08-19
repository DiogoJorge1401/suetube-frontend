import { useEffect, useState } from 'react'
import { client } from '../../api/client'
import { Card } from '../../components/Card/Card'
import { Container } from './Components'

interface HomeProps {
  type: string
}

export const Home = ({ type }: HomeProps) => {

  const [videos, setVideos] = useState<any[]>([])

  useEffect(() => {
    ; (async () => {
      try {
        const res = await client.get(`/videos/${type}`)

        setVideos(res.data)
      } catch (error) { }
    })()
  }, [type])

  return (
    <Container>
      {videos.map(video => <Card key={video._id} video={video} />)}
    </Container>
  )
}
