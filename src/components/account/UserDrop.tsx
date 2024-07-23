import Image from "next/image";
import router from "next/router";
import { toast } from "react-toastify";

const iconData = [
  { src: "/asset/userac.svg", label: "My Account", Link: "/account" },
  { src: "/asset/cart.svg", label: "My Orders", Link: "/orders" },
  { src: "/asset/help.svg", label: "Help", Link: "/help" },
  { src: "/asset/about.svg", label: "About", Link: "/about" },
  { src: "/asset/setting.svg", label: "Setting", Link: "/setting" },
];

const UserDrop = () => {
  const logout = () => {
    localStorage.clear();
    toast.success("Logout successful");

    router.push("/login");
  };
  return (
    <div className="absolute bg-[#FFFFFF] w-[306px] h-[482px] top-[60px] right-0 pt-[30px] pb-[40px] pr-[40px] pl-[40px] gap-[30px] rounded-b-[16px] shadow-custom z-50">
      <div className="flex items-center gap-[10px] mb-[20px]">
        <Image
          src="/asset/user-drop.svg"
          alt="user icon"
          width={56}
          height={56}
          className="rounded-[16px]"
        />
        <div className="flex-col">
          <h1 className="font-dm-sans text-[14px] font-medium leading-[18.23px]">
            {localStorage.getItem("username")}
          </h1>
          <span className="font-dm-sans text-[12px] font-light leading-[24px] text-[#495D69]">
            {localStorage.getItem("email")}
          </span>
        </div>
      </div>

      <div className="w-[226px] h-[280px] pt-[20px] pb-[20px] border-t-[1px] border-b-[1px]">
        {iconData.map((item, index) => (
          <div key={index} className="flex px-0 py-4 gap-4">
            <Image src={item.src} alt={item.label} width={16} height={16} />
            <span className="font-dm-sans text-[14px] font-normal leading-[18.23px] text-[#1C2834]">
              {item.label}
            </span>
          </div>
        ))}
      </div>

      <div className="flex gap-2 mt-4">
        <Image
          src="/asset/logout.svg"
          alt="logout icon"
          width={16}
          height={16}
        />

        <button
          onClick={logout}
          className="font-dm-sans text-[14px] font-normal leading-[18.23px] text-[#495D69]"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default UserDrop;
