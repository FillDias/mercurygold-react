"use client";

import { Player } from "@/components/Players";

export default function Videos() {
  const videosList = [
    {
      id: 1,
      url: "https://www.youtube.com/embed/G58wD_qRz7w?si=QF5REXd-jQbC1rc8",
    },
    {
      id: 2,
      url: "https://www.youtube.com/embed/vDl_HgSTKAQ?si=d-j-4D7KYlb_kv3K",
    },
    {
      id: 3,
      url: "https://www.youtube.com/embed/ynZ-i6CjlCA?si=-oAD4xsWRLd9HY1r",
    },
    {
      id: 4,
      url: "https://www.youtube.com/embed/R6VF42QmqtM?si=S_XGu_2ldZZB7tuX",
    },
  ];

  return (
    <>
      <div className="flex flex-col gap-2 pt-16 bg-[#F0FFF0] p-2 md:px-[10%] md:py-[32px]">
        {videosList.map((item) => (
          <Player key={item.id} url={item.url} />
        ))}
      </div>
    </>
  );
}
