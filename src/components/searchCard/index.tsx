
import { getProducts } from "@/utils/getProducts";
import Image from "next/image";
import { SetStateAction, useState, useEffect, useRef } from "react";

const SearchCard = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const searchRef = useRef(null);

  const handleInputChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setSearchTerm(event.target.value);
  };

  const handleFormSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    const results = await getProducts(searchTerm);
    setProducts(results);
    setSearchTerm(""); 
    setShowResults(true); 
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setShowResults(false); 
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div
        ref={searchRef}
        className="flex lg:gap-6 gap-2 md:gap-4 py-2 px-4 bg-gray-600 rounded-lg lg:w-[37.55rem] w-64"
      >
        <Image
          src="/icons/yellowSearch.svg"
          alt="search"
          width={16}
          height={16}
        />
        <form onSubmit={handleFormSubmit}>
          <input
            className="bg-gray-600 border-none focus:outline-none text-sm text-white"
            type="text"
            placeholder="What are you looking for?"
            value={searchTerm}
            onChange={handleInputChange}
            onFocus={() => setShowResults(true)}
          />
        </form>
      </div>
      {showResults && (
        <div className="z-5 mt-6 pt-6 bg-white rounded-lg shadow-lg p-4">
          {products.length > 0 ? (
            <ul>
              {products.map((product: any) => (
                <li key={product.id} className="py-2 border-b border-gray-200">
                  {product.name}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">No products found</p>
          )}
        </div>
      )}
    </>
  );
};

export default SearchCard;
