import Image from "next/image";
const StoreInfo = () => {
  return (
    <div className="flex justify-between py-4">
      <div className="flex items-center gap-1">
        <h1 className="font-bold text-base leading-[20.83px]">Store Info:</h1>
        <div className=" flex gap-2">
          <Image
            src="/asset/yellowShop.svg"
            alt="star"
            width={26}
            height={26}
          />
          <h1>Awesome Shop 1</h1>
        </div>
      </div>
      <button className="flex gap-2 border border-gray-400 justify-center items-center px-4 py-2 rounded-lg font-bold text-sm leading-[18.23px]">
        <span>
          <Image src="/asset/phone.svg" alt="phone" width={16} height={16} />
        </span>
        Contact Store
      </button>
    </div>
  );
};

export default StoreInfo;
