import { useEffect, useState } from "react";

import {
  Avatar,
  Card,
  CardImage,
  CardTitle,
  CardDescription,
  CardPrice,
  CardDeadline,
  CardProfile,
  CardProfileName,
  CardContent,
  CardSeperator,
  Layout,
} from "./components";

interface NFTPreview {
  id: string;
  image: {
    src: string;
    alt: string;
  };
  title: string;
  description: string;
  price: number;
  deadline: {
    time: number;
    format: "second" | "minute" | "hour" | "day" | "week" | "month" | "year";
  };
  user: {
    name: string;
    avatar: {
      src: string;
      alt: string;
    };
  };
}

function App() {
  const [nftPreviews, setNftPreviews] = useState<NFTPreview[]>([]);

  useEffect(() => {
    const fetchPreviews = async () => {
      const response = await fetch("/marketplace");
      const data = await response.json();
      setNftPreviews(data);
    };

    fetchPreviews();
  }, []);

  return (
    <Layout>
      {nftPreviews.map(({ id, image, title, description, price, deadline, user }) => (
        <Card key={id}>
          <CardImage src={image.src} alt={image.alt} />
          <CardContent className="mt-6">
            <CardTitle>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
            <div className="flex justify-between py-2">
              <CardPrice>{price}</CardPrice>
              <CardDeadline timeRemaining={deadline.time} format={deadline.format} />
            </div>
          </CardContent>
          <CardSeperator />
          <CardProfile>
            <Avatar src={user.avatar.src} alt={user.avatar.alt} />
            <CardProfileName>{user.name}</CardProfileName>
          </CardProfile>
        </Card>
      ))}
    </Layout>
  );
}

export default App;
