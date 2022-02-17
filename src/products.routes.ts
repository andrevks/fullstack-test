import { Router } from "express";
import { ProductRepository } from "./ProductRepository";


const productRoutes = Router();
const productRepository = new ProductRepository();



productRoutes.post('/products', (request, response) => {
  const { name, category, price } =  request.body;

  const productAlreadyExists = productRepository.findByName(name);

  if (productAlreadyExists) {
    return response.status(400).json({ error: "Product Already exists!" });
  }

  productRepository.create({ name, category, price })

  return response.status(201).send()
})

productRoutes.get('/products', (request, response) => {
  const all = productRepository.list();

  return response.json(all)
})


productRoutes.get('/products/:id', (request, response) => {
  const { name, category, price, created_at } =  request.body;


  return response.status(200).json({})
})


productRoutes.put('/products/:id', (request, response) => {
  const { name, category, price, created_at } =  request.body;


  return response.status(200).json({})
})



productRoutes.delete('/products/:id', (request, response) => {
  const { name, category, price, created_at } =  request.body;


  return response.status(200).json({})
})

export { productRoutes }