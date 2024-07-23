import Link from "next/link";
import Image from "next/image";

const Redirect = () => {
  return (
    <div className="bg-[#FFFFFF] lg:w-[800px] p-10 rounded flex justify-between">
      <div className="w-[119px] flex flex-col gap-4">
        <span className="font-dm-sans text-sm font-medium leading-[18.23px] text-left">
          Account exist?
        </span>
        <span className="font-dm-sans text-sm font-light leading-[24px] text-left">
          Login
        </span>
      </div>
      <button className="px-8 py-2 gap-2 rounded-lg border-[1.5px] font-semibold border-grqy-50 flex items-center justify-between">
        <Link href="/login">Login Here</Link>
        <Image src="/asset/bigArrow.svg" alt="login" width={16} height={16} />
      </button>
    </div>
  );
};

export default Redirect;
