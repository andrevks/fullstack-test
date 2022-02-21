import { Router } from "express";
import { Product } from "./entities/Product";
import { ProductRepository } from "./ProductRepository";

const productRoutes = Router();

productRoutes.post("/", async (request, response) => {
  const { name, category, price } = request.body;

  try {
    const productRepository = new ProductRepository();
    const productAlreadyExists = productRepository.findByName(name);

    if (productAlreadyExists) {
      return response.status(400).json({ error: "Product Already exists!" });
    }

    productRepository.create({ name, category, price });

    return response.status(201).send();
  } catch (error) {
    console.log(`Error: ${error}`);
  }
});

productRoutes.get("/", async (request, response) => {
  const productRepository = new ProductRepository();
  const all = await productRepository.read();
  console.log(all);

  return response.json(all);
});

// productRoutes.get('/products/:id', (request, response) => {
//   const { name, category, price, created_at } =  request.body;

//   return response.status(200).json({})
// })

// productRoutes.put('/products/:id', (request, response) => {
//   const { name, category, price, created_at } =  request.body;

//   return response.status(200).json({})
// })

// productRoutes.delete('/products/:id', (request, response) => {
//   const { name, category, price, created_at } =  request.body;

//   return response.status(200).json({})
// })

export { productRoutes };
