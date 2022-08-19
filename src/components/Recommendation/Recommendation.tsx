import { useEffect, useState } from 'react'
import { client } from '../../api/client'
import { Card } from '../Card/Card'
import { Container } from './Components'

interface RecommendationProps {
  tags: string[]
  videoId: string
}

export const Recommendation = ({ tags, videoId }: RecommendationProps) => {

  const [videos, setVideos] = useState<any>([])


  useEffect(() => {
    ; (async () => {
      const { data } = await client(`/videos/tags/${tags.join() || ','}`)
      const idx = data.findIndex((v: any) => v._id === videoId)
      data.splice(idx, 1)
      setVideos(data)
    })()
  }, [tags])

  return (
    <Container>
      {videos.map((video: any) => <Card video={video} type='sm' key={video._id} />)}
    </Container>
  )
}
