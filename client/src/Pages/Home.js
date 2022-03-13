import React from "react";
import Explore from "../Components/HomePage/ExploreComponent";
import JobSearch from "../Components/HomePage/JobSearch";
import PostJob from "../Components/HomePage/PostJob";
import Slideshow from "../Components/HomePage/Slideshow";
import Connect from "../Components/HomePage/ConnectComponent";
import Video from "../Components/HomePage/Video";
import GetStarted from "../Components/HomePage/GetStarted";
import Footer from "../Components/HomePage/Footer";
import HeroContainer from "../Components/HomePage/Hero";
import Navbar from "../Components/HomePage/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />

      <HeroContainer />
      <Explore />
      <JobSearch />
      <PostJob />
      <Slideshow />
      <Connect />
      <Video />
      <GetStarted />
      <Footer />
    </>
  );
};

export default Home;
