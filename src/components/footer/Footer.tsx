import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#F4F5F6]">
      <div className="content-wrapper py-10 flex justify-between items-center">
        <div className="flex lg:gap-[10px] pl-2 items-center">
          <Image src="/icons/logo.svg" alt="logo" width={40} height={40} />
          <span className="font-dm-sans text-[16px] font-bold text-left">
            Mark8
          </span>
        </div>
        <div className="w-[224px] h-[10px] flex items-center gap-[16px] ">
          <span className="font-dm-sans text-[14px] text-[#0C0D0D] font-medium text-center">
            ©2024. Mark8
          </span>
          <span className="font-dm-sans text-[14px] font-light leading-[24px] text-left text-[#495D69]">
            By Awesomity Ltd
          </span>
        </div>
        <div className="w-[112px] h-[16px] hidden lg:flex items-center gap-[16px]">
          <Image
            src="/asset/tuitter.svg"
            alt="tuitter"
            width={16}
            height={16}
          />
          <Image
            src="/asset/insta.svg"
            alt="instagram"
            width={16}
            height={16}
          />
          <Image
            src="/asset/youtube.svg"
            alt="youtube"
            width={16}
            height={16}
          />
          <Image
            src="/asset/linkedin.svg"
            alt="linkedin"
            width={16}
            height={16}
          />
        </div>
      </div>
    </footer>
  );
};
export default Footer;
