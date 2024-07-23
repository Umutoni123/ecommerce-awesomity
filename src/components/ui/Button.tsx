type ButtonProps = {
  text: string;
};

const Button = ({ text }: ButtonProps) => {
  return (
    <div>
      <button className="bg-[#1C2834] text-[#79878F] text-[10px] font-medium border-[1px] border-gray-700 px-5 py-[10px] rounded-[40px] hover:border-white hover:text-white">
        {text}
      </button>
    </div>
  );
};

export default Button;
