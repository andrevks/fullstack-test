import http from "../http.common";

interface IProductService {
  name: string;
  category: string;
  price: number;
}

const getAll = async () => {
  return await http.get("/products");
};
const create = async (data: IProductService) => {
  return await http.post("/products", data);
};
const update = async (id: number, data: IProductService) => {
  return await http.put(`/products/${id}`, data);
};
const remove = async (id: number) => {
  return await http.delete(`/products/${id}`);
};

// const get = (id: number) => {
//   return http.get(`/products/${id}`);
// };

export default {
  getAll,
  update,
  create,
  remove,
  // get,
};
