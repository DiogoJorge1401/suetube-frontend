import {
  AddTaskOutlined,
  ReplyOutlined,
  ThumbDown,
  ThumbDownOffAltOutlined,
  ThumbUp,
  ThumbUpOutlined,
} from "@mui/icons-material";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { format } from "timeago.js";
import { client } from "../../api/client";
import { Comments } from "../../components/Comments/Comments";
import { Recommendation } from "../../components/Recommendation/Recommendation";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { subscription } from "../../redux/userSlice";
import {
  dislike,
  fetchFailure,
  fetchStart,
  fetchSuccess,
  like,
} from "../../redux/videoSlice";
import {
  Button,
  Buttons,
  Channel,
  ChannelCounter,
  ChannelDetail,
  ChannelImage,
  ChannelInfo,
  ChannelName,
  Container,
  Content,
  ContentWrapper,
  Description,
  Details,
  Hr,
  Info,
  Subscribe,
  Title,
  VideoFrame,
  VideoWrapper,
} from "./Components";

interface VideoProps {
  setSideBarIsOpen(b: boolean): void;
  handleClick: (s: string) => void;
}

export const Video = ({ setSideBarIsOpen, handleClick }: VideoProps) => {
  const { currentUser } = useAppSelector((state) => state.user);
  const { currentVideo } = useAppSelector((state) => state.video);

  const dispatch = useAppDispatch();
  const { id } = useParams();

  const [channel, setChannel] = useState<any>({});
  const navigate = useNavigate();

  useEffect(() => {
    setSideBarIsOpen(false);
    (async () => {
      dispatch(fetchStart());

      try {
        const videoRes = await client.get(`/videos/find/${id}`);
        const userRes = await client.get(`/users/${videoRes.data.userId}`);

        setChannel(userRes.data);

        dispatch(fetchSuccess(videoRes.data));
      } catch (error) {
        dispatch(fetchFailure());
      }
    })();
  }, [id]);

  const videoIsDisliked = () => {
    return currentVideo.dislikes.includes(currentUser?._id);
  };
  const videoIsLiked = () => {
    return currentVideo.likes.includes(currentUser?._id);
  };
  const amISubscribed = () => {
    return currentUser?.subscribedUsers.includes(channel._id);
  };

  const handleLike = async () => {
    if (!currentUser) return navigate("/signin");
    await client.post(`/users/like/${currentVideo._id}`);
    dispatch(like(currentUser?._id));
  };
  const handleDislike = async () => {
    if (!currentUser) return navigate("/signin");
    await client.post(`/users/dislike/${currentVideo._id}`);
    dispatch(dislike(currentUser?._id));
  };
  const handleSubscription = async () => {
    if (!currentUser) return navigate("/signin");
    if (!amISubscribed()) {
      await client.post(`/users/subscribe/${channel._id}`);
      dispatch(subscription(channel._id));
      return;
    }

    await client.post(`/users/unsubscribe/${channel._id}`);
    dispatch(subscription(channel._id));
  };
  

  return (
    currentVideo && (
      <Container onClick={() => handleClick("video")}>
        <Content>
          <VideoWrapper>
            <VideoFrame src={currentVideo.videoURL} controls />
          </VideoWrapper>

          <ContentWrapper>
            <Title>{currentVideo.title}</Title>

            <Details>
              <Info>
                {currentVideo.videoViews} views •{" "}
                {format(currentVideo.createdAt)}
              </Info>

              <Buttons>
                <Button onClick={handleLike}>
                  {videoIsLiked() ? <ThumbUp /> : <ThumbUpOutlined />}
                  {currentVideo.likes.length}
                </Button>

                <Button onClick={handleDislike}>
                  {videoIsDisliked() ? (
                    <ThumbDown />
                  ) : (
                    <ThumbDownOffAltOutlined />
                  )}
                  Dislike
                </Button>

                <Button>
                  <ReplyOutlined />
                  Share
                </Button>

                <Button>
                  <AddTaskOutlined />
                  Save
                </Button>
              </Buttons>
            </Details>

            <Hr />

            <Channel>
              <ChannelInfo>
                <ChannelImage src={channel.img} />

                <ChannelDetail>
                  <ChannelName>{channel.username}</ChannelName>

                  <ChannelCounter>
                    {channel.subscribers} subscribers
                  </ChannelCounter>

                  <Description>{currentVideo.description}</Description>
                </ChannelDetail>
              </ChannelInfo>

              {!currentUser ? (
                <Subscribe onClick={handleSubscription} isSubscribed={true}>
                  SUBSCRIBE
                </Subscribe>
              ) : (
                currentUser._id !== channel._id && (
                  <Subscribe
                    onClick={handleSubscription}
                    isSubscribed={amISubscribed()}
                  >
                    {amISubscribed() ? "SUBSCRIBED" : "SUBSCRIBE"}
                  </Subscribe>
                )
              )}
            </Channel>

            <Hr />

            <Comments videoId={currentVideo._id} />
          </ContentWrapper>
        </Content>

        <Recommendation tags={currentVideo.tags} videoId={currentVideo._id} />
      </Container>
    )
  );
};
