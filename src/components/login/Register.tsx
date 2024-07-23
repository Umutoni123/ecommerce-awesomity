import Image from "next/image";
import Link from "next/link";

const Register = () => {
  return (
    <div className="bg-[#FFFFFF] w-full max-w-[800px] p-4 sm:p-6 md:p-10 rounded flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
      <div className="w-full md:w-auto flex flex-col gap-2 md:gap-4 text-center md:text-left">
        <span className="font-dm-sans text-sm font-medium leading-[18.23px]">
          New Here?
        </span>
        <span className="font-dm-sans text-sm font-light leading-6">
          Create an account
        </span>
      </div>
      <button className="w-full md:w-auto px-4 sm:px-5 py-2 font-semibold rounded-lg border-[1.5px] border-[#DBDBDB] flex items-center justify-center gap-2">
        <Link href="/register">Register here</Link>
        <Image
          src="/asset/bigArrow.svg"
          alt="register"
          width={16}
          height={16}
        />
      </button>
    </div>
  );
};

export default Register;
