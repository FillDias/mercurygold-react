"use client";

import { useEffect, useState } from "react";

export const Player = ({ url }: any) => {
  const isClient = typeof window !== "undefined";
  const [windowWidth, setWindowWidth] = useState<any>(
    isClient ? window.innerWidth : 0
  );
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    if (isClient) {
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, [isClient]);

  return (
    <>
      <iframe
        width="100%"
        height={`${windowWidth < 1024 ? "215" : "460"}`}
        src={url}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </>
  );
};
