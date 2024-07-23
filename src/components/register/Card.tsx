import React from "react";
import Image from "next/image";

const Card = () => {
  return (
    <div className="lg:w-[400px] p-10 justify-between bg-[#F4F5F6] flex flex-col">
      <Image src="/icons/logo.svg" alt="logo" width={56} height={56} />
      <div className="flex flex-col gap-4">
        <span className="font-dm-sans text-2xl font-black leading-[31.25px] text-left">
          Mark8
        </span>
        <span className="font-dm-sans text-sm font-light leading-6 text-left">
          By Awesomity Lab
        </span>
      </div>
      <span className="font-dm-sans text-[12px] font-light leading-6 text-left">
        ©️ 2024 Awesomity Lab
      </span>
    </div>
  );
};

export default Card;
