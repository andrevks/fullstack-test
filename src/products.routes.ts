import { Router } from "express";
import { Product } from "./entities/Product";
import { ProductRepository } from "./ProductRepository";

const productRoutes = Router();

productRoutes.post("/", async (request, response) => {
  const { name, category, price } = request.body;

  try {
    const productRepository = new ProductRepository();
    const productAlreadyExists = await productRepository.findByName(name);

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
  return response.json(all);
});

productRoutes.get("/:id", async (request, response) => {
  const { id } = request.params;
  const productRepository = new ProductRepository();
  const product = await productRepository.findById(+id);

  const isIdOnDatabase = product ? product : null;

  if (!isIdOnDatabase) {
    return response.status(404).json({ error: "Product ID doesn't exist" });
  }

  return response.status(200).json(product);
});

productRoutes.put("/:id", async (request, response) => {
  const { name, category, price } = request.body;
  const { id } = request.params;

  const productRepository = new ProductRepository();
  const product = await productRepository.findById(+id);

  const isIdOnDatabase = product ? product : null;

  if (!isIdOnDatabase) {
    return response.status(404).json({ error: "Product ID doesn't exist" });
  }

  const updatedProduct = {
    id: +id,
    name: name ? name : product.name,
    category: category ? category : product.category,
    price: price ? price : product.price,
  };

  productRepository.update(updatedProduct);

  return response.status(200).send();
});

// productRoutes.delete('/products/:id', (request, response) => {
//   const { name, category, price, created_at } =  request.body;

//   return response.status(200).json({})
// })

export { productRoutes };
