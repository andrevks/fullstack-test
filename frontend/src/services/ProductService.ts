import http from "../http.common";

// interface IProductService {
//   name: string;
//   category: string;
//   price: number;
// }

const getAll = async () => {
  return await http.get("/products");
};
// const get = (id: number) => {
//   return http.get(`/products/${id}`);
// };
// const create = (data: IProductService) => {
//   return http.post("/products", data);
// };
// const update = (id: number, data: IProductService) => {
//   return http.put(`/products/${id}`, data);
// };
// const remove = (id: number) => {
//   return http.delete(`/products/${id}`);
// };

export default {
  getAll,
  // get,
  // create,
  // update,
  // remove,
};
