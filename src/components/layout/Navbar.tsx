import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import "react-toastify/dist/ReactToastify.css";
import UserDrop from "../account/UserDrop";

const Navbar = () => {
  const [userDropVisible, setUserDropVisible] = useState(false);

  const toggleUserDrop = () => {
    setUserDropVisible(!userDropVisible);
  };

  return (
    <div className="py-[10px]">
      <div className="flex justify-between">
        <div className="flex lg:gap-[60px] md:gap-5">
          <div className="flex gap-[10px] justify-center items-center">
            <Image src="/icons/logo.svg" alt="logo" width={40} height={40} />
            <div>
              <h1 className="font-bold text-base leading-[20.83px]">MarkB</h1>
              <p className="font-light text-[12px] leading-6">
                By Awesomity Lab
              </p>
            </div>
          </div>
          <div className="lg:flex lg:gap-10 md:gap-2 justify-center items-center hidden">
            <Link href="/" className="flex gap-2">
              <Image src="/icons/home.svg" alt="home" width={16} height={16} />
              <h1 className="font-bold text-[12px] !leading[15.62px]">Home</h1>
            </Link>
            <Link href="/store" className="flex gap-2">
              <Image
                src="/icons/store.svg"
                alt="store"
                width={16}
                height={16}
              />
              <h1 className="font-normal text-[12px] !leading[15.62px]">
                Store
              </h1>
            </Link>
          </div>
        </div>
        <div className="md:flex lg:gap-10 md:gap-3 justify-center items-center hidden">
          <Image src="/icons/search.svg" alt="search" width={16} height={16} />
          <Link href="/mu" className="flex gap-2">
            <Image src="/icons/cart.svg" alt="cart" width={16} height={16} />
            <h1 className="font-normal text-[12px] leading-[15.62px]">
              My Cart
            </h1>
          </Link>
          <Link href="/saved" className="flex gap-2">
            <Image src="/icons/saved.svg" alt="saved" width={16} height={16} />
            <h1 className="font-normal text-[12px] leading-[15.62px]">Saved</h1>
          </Link>
          <Link
            href="/store"
            className="flex gap-4 border-2 border-gray-300 px-4 py-2 rounded-lg"
          >
            Open A Store
            <Image
              src="/icons/yellowStore.svg"
              alt="store"
              width={16}
              height={16}
              className="pt-1 text-[#C1CF16]"
            />
          </Link>

          <div
            className="border-2 border-gray-200 rounded-md flex px-4 py-2 divide-x divide-black cursor-pointer"
            onClick={toggleUserDrop}
          >
            <Image
              src="/icons/profile.svg"
              alt="profile"
              width={20}
              height={20}
              className="pr-1"
            />
            <Image
              src="/icons/arrow.svg"
              alt="arrow"
              width={16}
              height={16}
              className="pl-1"
            />
          </div>
          {userDropVisible && <UserDrop />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
