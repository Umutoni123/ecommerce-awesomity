import { buttonData } from "@/data/buttonData";
import Button from "../ui/Button";
import SearchCard from "../searchCard";

const CardGrid = () => {
  return (
    <div className="bg-[#1C2834] py-10 rounded-2xl flex flex-col justify-center items-center mt-10">
      <div>
        <h1 className="font-black text-white text-2xl leading-[31.25px]">
          Welcome to <span className="text-[#C1CF16]">MarkB</span>
        </h1>
      </div>
      <div className="py-8">
        <SearchCard />
      </div>
      <div className="flex md:gap-10 gap-4">
        {buttonData.map((button, index) => (
          <Button key={index} text={button.text} />
        ))}
      </div>
    </div>
  );
};

export default CardGrid;
