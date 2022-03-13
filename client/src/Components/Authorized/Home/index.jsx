import React, { useEffect, useState } from "react";
import { HomeWrapper } from "./Home.styles";
import axios from "axios";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState("");
  const [postLength, setPostLength] = useState(0);

  const getAllPosts = async () => {
    const post = await axios.get("http://localhost:8080/api/post/all", {
      headers: {
        authorization: `${localStorage.getItem("token")}`,
      },
    });
    setPosts(post.data);
  };
  useEffect(() => {
    getAllPosts();
  }, [postLength]);

  const formatter = new Intl.DateTimeFormat("en-GB", {
    year: "numeric",
    month: "long",
    day: "2-digit",
  });

  const handleSubmit = async () => {
    try {
      const config = {
        headers: { Authorization: `${localStorage.getItem("token")}` },
      };

      const post = await axios.post(
        "http://localhost:8080/api/post/",
        {
          description: input,
        },
        config
      );
      setPostLength(postLength + 1);
      setInput("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <HomeWrapper>
      <div className="top-panel">
        <div className="input">
          <div className="container">
            <textarea
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
              }}
            />
            <button type="button" onClick={() => handleSubmit()}>
              Post
            </button>
          </div>
        </div>
      </div>
      <div className="body">
        {posts?.map((post, i) => (
          <div className="post" key={i}>
            <h3>{post.user.email}</h3>
            <p>{post.description}</p>
            <p className="date">
              {formatter.format(Date.parse(post.createdAt))}
            </p>
          </div>
        ))}
      </div>
    </HomeWrapper>
  );
};

export default Home;
