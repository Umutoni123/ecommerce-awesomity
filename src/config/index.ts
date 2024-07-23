import axios from "axios";

const axiosInstance = axios.create({
    baseURL:'https://api.mark8.awesomity.rw'
})

export default axiosInstance