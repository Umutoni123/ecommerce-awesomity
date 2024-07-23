import React from "react";
import Image from "next/image";

export const Contact = () => {
  return (
    <div
      className=" p-[40px] rounded-[16px] mt-[108px] mb-[40px] flex flex-col md:flex-row justify-between items-center md:items-start"
      style={{ backgroundImage: "url(/asset/bgcontact.svg)" }}
    >
      <div className="text-center md:text-left">
        <span className="text-[#C1CF16] font-dm-sans text-[20px] md:text-[24px] font-[900] leading-[25px] md:leading-[31.25px]">
          Open
        </span>{" "}
        <span className="text-[#1C2834] font-dm-sans text-[20px] md:text-[24px] font-extrabold leading-[25px] md:leading-[31.25px]">
          your Store
        </span>
      </div>
      <form className="flex flex-col md:flex-row gap-[10px] mt-[20px] md:mt-0 w-full md:w-auto">
        <div className="relative w-full md:w-[600px] h-[48px]">
          <input
            type="text"
            placeholder="Enter your Email"
            className="w-full h-[48px] py-[8px] px-[16px] rounded-[8px] border placeholder-custom"
          />
          <span className="absolute inset-y-0 left-0 flex pl-3 items-center">
            <Image
              src="/asset/contact-mail.svg"
              alt="mail icon"
              width="16"
              height="16"
            />
          </span>
        </div>
        <button className="md:w-auto px-[24px] py-[12px] rounded-[8px] bg-[#C1CF16] text-[#1C2834] flex items-center justify-center gap-[8px] mt-[10px] md:mt-0">
          <span className="font-dm-sans text-[16px] md:text-[14px] font-[800] leading-[20px] md:leading-[18.23px]">
            Submit
          </span>
          <Image
            src="/asset/right-arrow.svg"
            alt="arrow-icon"
            width="16"
            height="16"
          />
        </button>
      </form>
    </div>
  );
};
