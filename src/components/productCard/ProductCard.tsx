import Image from "next/image";
import Link from "next/link";
const isInCart = true; // Replace with your actual condition
const like = true;

const ProductCard = (props: any) => {
  const { id, thumbnail, name, unitPrice } = props.product;
  return (
    <div className="flex flex-col gap-5 mt-5 bg-gray-100 rounded-lg pb-5">
      <Link href={`/${id}`}>
        <Image
          src={thumbnail[0]}
          alt="product"
          width={240}
          height={240}
          className="rounded-lg w-[240px] h-[240px]"
        />
      </Link>
      <div className="px-2 flex justify-between">
        <div>
          <h1 className="font-bold text-base leading-[20.3px]">{name}</h1>
          <div className="flex gap-5">
            <h2 className="text-base leading-[20.3px] font-bold leading[20.83] text-[#C1CF16]">
              {unitPrice}
            </h2>
            <h3 className="text-base leading-[20.3px] line-through text-gray-600">
              17000
            </h3>
          </div>
        </div>
        <div className="flex border-2 border-gray-100 px-2 py-1 gap-1">
      <button className="text-base leading-[20.3px]">
        {isInCart ? "🛒" : "✖"}
      </button>
      <button className="text-base leading-[20.3px]">
        {like ? "❤" : "✖"}
      </button>
    </div>
      </div>
    </div>
  );
};

export default ProductCard;
