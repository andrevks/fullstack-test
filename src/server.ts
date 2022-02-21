import "reflect-metadata";
import express from "express";
import "./database";
import swaggerUi from "swagger-ui-express";
import swaggerFile from "./swagger.json";

import { productRoutes } from "./products.routes";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.get("/", (req, res) => {
  res.send(`<h1>API Fullstack Job Test - DomPixel running</h1>`);
});

app.use("/products", productRoutes);

const PORT = 3333;
app.listen(PORT, () => console.log(`Server is running on port ${3333}`));
