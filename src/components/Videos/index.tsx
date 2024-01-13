"use client";

import { useState, useEffect } from "react";
export const Videos = () => {
  const [windowWidth, setWindowWidth] = useState(0);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    setWindowWidth(window.innerWidth);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const url = "https://m.youtube.com/watch?v=vDl_HgSTKAQ";
  return (
    <>
      <iframe
        width="100%"
        height={`${windowWidth < 1024 ? "315" : "460"}`}
        src={url}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </>
  );
};
export default Videos;
