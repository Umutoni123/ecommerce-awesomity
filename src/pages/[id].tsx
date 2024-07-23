import { useParams } from "next/navigation";
import { getProducts } from "@/utils/getProducts";
import { useState } from "react";
import Image from "next/image";
import StoreInfo from "@/components/storeCard/StoreInfo";

const ProductDetails = () => {
  const [allProducts, setAllProducts] = useState([]);
  const products = async () => {
    await getProducts()
      .then((res) => setAllProducts(res))
      .catch((error) => error);
  };
  products();

  const id = useParams();
  const productDetail: any = allProducts.find(
    (product: any) => product.id === id.id
  );
  return (
    <div>
      <div className="bg-gray-100 rounded-lg content-wrapper">
        {productDetail ? (
          <div className="flex gap-10">
            <div className="flex flex-col gap-3 border border-gray-300 rounded-lg w-1/3">
              <Image
                src={productDetail.thumbnail[0]}
                alt="thumbnail"
                width={400}
                height={240}
              />
              <div className="flex gap-3">
                <Image
                  src={productDetail.thumbnail[1]}
                  alt="thumbnail"
                  width={50}
                  height={50}
                />
                <Image
                  src={productDetail.thumbnail[0]}
                  alt="thumbnail"
                  width={50}
                  height={50}
                />
                <Image
                  src={productDetail.thumbnail[2]}
                  alt="thumbnail"
                  width={50}
                  height={50}
                />
              </div>
            </div>
            <div className="py-4 flex flex-col border border-gray-300 w-2/3 px-6">
              <div className="flex gap-3 mb-10">
                <h1>Product Details</h1>
                <button className="px-2 py-1 bg-[#F4F5F6] border rounded-lg uppercase text-[10px] font-bold leading-[13.02px]">
                  in stock
                </button>
              </div>
              <h1 className="text-2xl font-black leading-[31.25px]">
                {productDetail.name}
              </h1>
              <p className="text-[#C1CF16] font-bold text-balance leading-[20.83px]">
                {productDetail.unitPrice}
                <span>Rwf</span>
              </p>
              <div className="py-5">
                <h1 className="text-[16px] lading-[20.83] font-bold">
                  Description
                </h1>
                <p className="text-sm leading-6 font-light text-[#495D69] mt-1">
                  {productDetail.description}
                </p>
              </div>
              <div>
                <h1 className="text-sm font-bold">Reviews</h1>
                <div className="flex gap-3">
                  <Image
                    src="/asset/star.svg"
                    alt="star"
                    width={16}
                    height={16}
                  />
                  <p>
                    {productDetail.review?.rating} <span>(14 Reviews)</span>
                  </p>
                </div>
              </div>
              <div className="pt-4 flex">
                <button className="flex bg-[#C1CF16] px-8 py-2 rounded-lg justify-center items-center gap-2 ">
                  <span>
                    <Image
                      src="/icons/cart.svg"
                      alt="add tot cart"
                      width={16}
                      height={16}
                    />
                  </span>
                  Add To Cart
                </button>
              </div>
              <StoreInfo />
            </div>
          </div>
        ) : null}
      </div>
      <div>
        <h1 className="font-black text-2xl leading-[31.25px]">
          You might also like
        </h1>
        <div className="flex gap-3">
          {allProducts
            .filter((product: any) => product.id !== id.id)
            .slice(0, 4)
            .map((product: any) => (
              <div
                key={product.id}
                className="flex flex-col gap-5 mt-5 bg-gray-100 rounded-lg pb-5
              "
              >
                <Image
                  src={product.thumbnail[2]}
                  alt="product"
                  width={440}
                  height={100}
                  className="rounded-lg"
                />
                <div className="px-2 flex justify-between">
                  <div>
                    <h1 className="font-bold text-base leading-[20.3px]">
                      {product.name}
                    </h1>
                    <div className="flex gap-5">
                      <h2 className="text-base leading-[20.3px] font-bold leading[20.83] text-[#C1CF16]">
                        {product.unitPrice}
                      </h2>
                      <h3 className="text-base leading-[20.3px] line-through text-gray-600">
                        12000
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
