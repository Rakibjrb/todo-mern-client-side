import axios from "axios";

const useAxios = () => {
  const axiosAuto = axios.create({
    baseURL: "http://localhost:5000",
  });
  return axiosAuto;
};

export default useAxios;
