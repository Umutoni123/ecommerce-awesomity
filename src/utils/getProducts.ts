import axios from "axios";

export const getProducts = async (query = "") => {
  const token = localStorage.getItem("accessToken");
  try {
    return await axios
      .get("https://api.mark8.awesomity.rw/products", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        params: {
          search: query,
        },
      })
      .then((res) => res.data.data.products);
  } catch (error) {
    console.log(error);
  }
};
