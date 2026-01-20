import React from "react";

export default function SectionBg({
  pageName,
  pageInfo,
}: {
  pageName: string;
  pageInfo: string;
}) {
  return (
    <div className="bg-bg-section opacity-80 h-[50vh] w-full flex flex-col justify-center items-center text-center text-white gap-4">
      <div className="text-primary tracking-[7px] capitalize font-bold ">
        {pageInfo}
      </div>
      <h5 className="text-5xl font-extrabold ">{pageName}</h5>
    </div>
  );
}
