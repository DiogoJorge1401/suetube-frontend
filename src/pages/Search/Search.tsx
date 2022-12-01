import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { client } from "../../api/client";
import { Card } from "../../components/Card/Card";
import { Container } from "./Components";

interface ISearch {
  handleClick: (s: string) => void;
}

export const Search = ({ handleClick }: ISearch) => {
  const [videos, setVideos] = useState<any[]>([]);
  const { title } = useParams();

  useEffect(() => {
    (async () => {
      try {
        const res = await client.get(`/videos/search/${title}`);

        setVideos(res.data);
      } catch (error) {}
    })();
  }, [title]);

  return (
    <Container onClick={() => handleClick("search")}>
      {videos.map((video) => (
        <Card key={video._id} video={video} />
      ))}
    </Container>
  );
};
