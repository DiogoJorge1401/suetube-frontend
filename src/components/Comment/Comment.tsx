import { useEffect, useState } from 'react'
import { format } from 'timeago.js'
import { client } from '../../api/client'
import {
  Avatar,
  Container,
  Date,
  Details,
  Name, Text
} from './Components'

interface CommentProps {
  comment: any
}

export const Comment = ({ comment }: CommentProps) => {

  const [userComment, setUserComment] = useState<any>({})

  useEffect(() => {

    ; (async () => {
      const res = await client.get(`/users/${comment.userId}`)
      setUserComment(res.data)
    })()

  }, [comment.userId])

  return (
    <Container>
      <Avatar
        src={userComment.img}
      />

      <Details>
        <Name>
          {userComment.username} <Date>{format(comment.createdAt)}</Date>
        </Name>

        <Text>
          {comment.description}
        </Text>
      </Details>
    </Container>
  )
}
