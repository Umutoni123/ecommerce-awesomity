import Image from "next/image";
import ProductCard from "./ProductCard";
import { useState } from "react";

const ProductCardGrid = (props: { products: any[] }) => {
  const [visibleCount, setVisibleCount] = useState(7);

  const loadMore = () => {
    setVisibleCount((prevCount) => prevCount + 3);
  };

  return (
    <div className="mt-10">
      <div className="flex gap-5">
        <Image
          src="/icons/yellowStore.svg"
          alt="product"
          width={20}
          height={14}
        />
        <h1 className="font-bold text-base leading-[20.3px]">
          Recents Products <span>(100)</span>
        </h1>
      </div>
      <div>
        <div className="flex flex-wrap md:gap-10 gap-2 py-4">
          {props.products.slice(0, visibleCount).map((product: any) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        {visibleCount < props.products.length && (
          <div className="flex justify-center">
            <div className="px-4 py-2 bg-white rounded-lg flex gap-2 w-[10rem] border-2 border-gray-400 mb-4 justify-center">
              <Image
                src="/icons/yellowArrow.svg"
                alt="arrowDown"
                width={16}
                height={16}
              />
              <button
                onClick={loadMore}
                className=" text-black font-bold text-sm leading-[18.23px] "
              >
                Load More
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCardGrid;
