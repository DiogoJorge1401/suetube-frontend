import { useEffect, useState } from 'react'
import TimeAgo from 'react-timeago'
import { format } from 'timeago.js'
import { client } from '../../api/client'
import {
  ChannelImage,
  ChannelName,
  Container,
  Details,
  Image, Info, Texts, Title
} from './Components'

interface CardProps {
  type?: string
  video: any
}

export const Card = ({ type, video }: CardProps) => {

  const [user, setUser] = useState<any>({})

  useEffect(() => {
    ; (async () => {
      try {
        const user = await client
          .get(`/users/${video.userId}`)

        setUser(user.data)
      } catch (error) { }
    })()
  }, [video.userId])

  return (
    <Container to={`/video/${video._id}`} type={type}>
      <Image
        type={type}
        src={video.imgURL}
      />

      <Details
        type={type}
      >
        <ChannelImage
          type={type}
          src={user.img}
        />

        <Texts>
          <Title>{video.title}</Title>
          <ChannelName>{user.username}</ChannelName>
          <Info>{video.videoViews} views • {format(video.createdAt)}</Info>
        </Texts>

      </Details>
    </Container>
  )
}
