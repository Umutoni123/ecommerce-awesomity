import Image from "next/image";
import Link from "next/link";
const Register = () => {
  return (
    <div className="bg-[#FFFFFF] w-[800px] p-10 rounded flex justify-between">
      <div className="w-[119px] flex flex-col gap-4">
        <span className="font-dm-sans text-sm font-medium leading-[18.23px] text-left">
          New Here?
        </span>
        <span className="font-dm-sans text-sm font-light leading-6 text-left">
          Create an account
        </span>
      </div>
      <button className="w-[181px] px-5 py-2 font-semibold rounded-lg border-[1.5px] border-[#DBDBDB] flex items-center justify-center gap-2">
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
