import React from "react";
import Image from "next/image";

const Saved = () => {
  return (
    <div className="lg:pt-[108px] lg:pl-[80px] lg:pr-[80px] lg:pb-[40px] p-2 grid gap-[40px]">
      <div
        className="h-[131px] py-[40px] flex justify-center gap-[32px] rounded-[16px] bg-cover bg-center"
        style={{ backgroundImage: "url(/asset/bgsaved.svg)" }}
      >
        <div className="flex-col gap-[24px] justify-center items-center">
          <div>
            <span className="text-[#495D69] font-dm-sans text-[24px] font-extrabold text-center">
              Saved Products
            </span>
          </div>
          <div>
            <span className="font-dm-sans text-[14px] font-light flex justify-center text-[#495D69]">
              4 Saved
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-[20px]">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
          <div key={item} className="rounded-[16px] border border-gray-300">
            <Image
              src="/asset/bgsaved.svg"
              alt="saved product"
              width="377"
              height="256"
              className="rounded-[16px]"
            />
            <div className="h-[88px] p-[20px] flex justify-between gap-[10px]">
              <div className="h-[41px] flex-col gap-[20px]">
                <div>
                  <span className="font-dm-sans text-[14px] font-medium leading-[18.23px] text-left text-[#1C2834]">
                    Product {item}
                  </span>
                </div>
                <div className="flex gap-[10px]">
                  <span className="font-dm-sans text-[16px] font-bold leading-[20.83px] text-left text-[#C1CF16]">
                    9,000 Rwf
                  </span>
                  <span className="font-dm-sans text-[14px] font-bold leading-[18.23px] text-left text-[#DBDBDB]">
                    12,000 Rwf
                  </span>
                </div>
              </div>
              <div className="flex gap-[8px]">
                <button className="w-[48px] h-[48px] p-[8px] flex justify-center items-center rounded-[8px] border-[1.5px] border-[#DBDBDB]">
                  <Image
                    src="/asset/cart.svg"
                    alt="cart"
                    width="16"
                    height="16"
                  />
                </button>
                <button className="w-[48px] h-[48px] p-[8px] flex justify-center items-center rounded-[8px] border-[1.5px] border-[#DBDBDB]">
                  <Image
                    src="/asset/fav.svg"
                    alt="fav"
                    width="16"
                    height="16"
                  />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Saved;
