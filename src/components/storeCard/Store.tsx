import React from "react";
import Image from "next/image";
const Store = () => {
  return (

    <div className="">
    <div className=" p-8 h-[524px] flex-col gap-0 rounded-[16px] border border-[#DBDBDB] bg-[#FFFFFF]">
      <div className=" h-[100px] py-[20px] px-[40px] flex gap-[10px] border-b border-[#DBDBDB]">
        <div className="h-[60px] flex  items-center gap-[20px] ">
          <Image
            src="/asset/store.svg"
            width="60"
            height="60"
            alt="storeIcon"
          />
          <div className="h-[60px] flex items-center gap-[20px] ">
            <div className="flex flex-col items-center gap-[16px]">
              <span className="font-dm-sans text-[14px] font-medium text-left text-[#1C2834]">
                Awesome Shop 2
              </span>
              <span className="font-dm-sans text-[12px] font-light text-[#495D69]">
                134 Products
              </span>
            </div>
          </div>
          <button className=" h-[48px] py-[8px] px-[32px] flex gap-[8px] items-center rounded-[8px] bg-[#C1CF16] ">
            <Image src="/asset/user.svg" width="16" height="16" alt="user" />
            <span className="font-dm-sans text-sm font-extrabold leading-[18.23px] text-left text-[#1C2834]">
              View Profile
            </span>
          </button>
          <button className="h-[48px] p-[8px] flex items-center justify-center gap-[8px] rounded-[8px] border-[1.5px]">
            <Image src="/asset/call.svg" width="16" height="16" alt="" />
          </button>
          <button className="h-[48px] p-[8px] flex items-center justify-center gap-[8px] rounded-[8px] border-[1.5px]">
            <Image src="/asset/favorite.svg" width="16" height="16" alt="" />
          </button>
        </div>
      </div>
      <div className="h-[424px] p-[40px] flex  gap-[40px]">
        <div className="w-[658px] h-[344px] flex-col justify-between ">
            {/* text */}
          <div className="h-[231.33px] gap-[32px] ">
            <div className="flex-col gap-[20px]">
              <span className="font-dm-sans text-[16px] font-bold text-left">
                About
              </span>
              <p className="font-dm-sans text-[14px] font-light leading-[24px] text-left text-[#495D69]">
                A cozy boutique offering a curated selection of unique,
                high-quality clothing and accessories for fashion-forward
                individuals.
              </p>
            </div>
            <div className="h-[58px] gap-[20px]">
              <span className="font-dm-sans text-[16px] font-bold text-left">
                Categories
              </span>
              <div className="h-[27px] flex gap-[8px]">
                <div className="h-[27px] py-[10px] p-[20px] flex items-center gap-[8px] rounded-[40px] border border-[#DBDBDB]">
                  <span className="font-dm-sans text-[10px] font-medium leading-[13.02px] text-left text-[#495D69]">
                    Vectors
                  </span>
                </div>
                <div className="h-[27px] py-[10px] p-[20px] flex items-center gap-[8px] rounded-[40px] border border-[#DBDBDB]">
                  <span className="font-dm-sans text-[10px] font-medium leading-[13.02px] text-left text-[#495D69]">
                    Backgrounds
                  </span>
                </div>
              </div>
            </div>

            <div className="h-[44.33px] gap-[20px]">
              <span className="font-dm-sans text-[16px] font-bold leading-[20.83px] text-left text-[#1C2834]">
                Reviews
              </span>
              <div className="h-[13.33px] flex items-center gap-[10px]">
                <div className="h-[13.33px] flex items-center gap-[4px]">
                  <Image src="/asset/star.svg" width="16" height="16" alt="" />
                  <span className="font-dm-sans text-[16px] font-bold leading-[20.83px] text-left text-[#495D69]">
                    4.9
                  </span>
                </div>
                <div>
                  <span className="font-dm-sans text-[14px] font-light leading-[24px] text-left">
                    (14 Reviews)
                  </span>
                </div>
              </div>
            </div>
          </div>

          <button className=" h-[48px] py-[8px] px-[32px] flex gap-[8px] rounded-[8px] border-[1.5px] border-[#DBDBDB]">
            <Image
              src="/asset/delivery-box.svg"
              alt="delivery icon"
              width="16"
              height="16"
            />
            <span className="font-dm-sans text-[14px] font-extrabold leading-[18.23px] text-left text-[#141C24]">
              Explore Products
            </span>
          </button>
        </div>

        <div className="w-[790px] h-[344px] gap-[20px] flex justify-between ">
          <div className="h-[344px] gap-0 rounded-[16px] border  border-[#DBDBDB]">
            <Image src="/asset/itemstore.svg" className="rounded-[16px]" alt="" width="250" height="256" />
            <div className="h-[88px] p-[20px]  items-center flex  gap-[10px] ">
              <div className="h-[88px] p-[20px] flex-col gap-[10px] ">
                <span className="font-dm-sans font-[500] text-[14px]">
                  Product 1
                </span>
                <div><span className="font-dm-sans font-[700] text-[16px] text-[#C1CF16]">
                  9,000 Rwf
                </span></div>
              </div>

              <button className="h-[48px] p-[8px] flex items-center justify-center  gap-[8px] rounded-[8px] border-[1.5px] border-[#DBDBDB]">
                <Image
                  src="asset/favorite.svg"
                  alt="favorite icon"
                  width="16"
                  height="16"
                />
              </button>
            </div>
          </div>
          <div className="h-[344px] gap-0 rounded-[16px] border  border-[#DBDBDB]">
            <Image src="/asset/itemstore.svg" className="rounded-[16px]" alt="" width="250" height="256" />
            <div className="h-[88px] p-[20px]  items-center flex  gap-[10px] ">
              <div className="h-[88px] p-[20px] flex-col gap-[10px] ">
                <span className="font-dm-sans font-[500] text-[14px]">
                  Product 1
                </span>
                <div><span className="font-dm-sans font-[700] text-[16px] text-[#C1CF16]">
                  9,000 Rwf
                </span></div>
              </div>

              <button className="h-[48px] p-[8px] flex items-center justify-center  gap-[8px] rounded-[8px] border-[1.5px] border-[#DBDBDB]">
                <Image
                  src="asset/favorite.svg"
                  alt="favorite icon"
                  width="16"
                  height="16"
                />
              </button>
            </div>
          </div>
          <div className="h-[344px] gap-0 rounded-[16px] border  border-[#DBDBDB]">
            <Image src="/asset/itemstore.svg" className="rounded-[16px]" alt="" width="250" height="256" />
            <div className="h-[88px] p-[20px]  items-center flex  gap-[10px] ">
              <div className=" h-[88px] p-[20px] flex-col gap-[10px] ">
                <span className="font-dm-sans font-[500] text-[14px]">
                  Product 1
                </span>
                <div><span className="font-dm-sans font-[700] text-[16px] text-[#C1CF16]">
                  9,000 Rwf
                </span></div>
              </div>

              <button className="h-[48px] p-[8px] flex items-center justify-center  gap-[8px] rounded-[8px] border-[1.5px] border-[#DBDBDB]">
                <Image
                  src="asset/favorite.svg"
                  alt="favorite icon"
                  width="16"
                  height="16"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Store;
