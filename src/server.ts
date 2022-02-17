import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerFile from "./swagger.json"

import cors from "cors";
import { productRoutes } from "./products.routes";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.get('/', (req, res) => {
  res.send('API Fullstack Job Test - DomPixel running')
} )


app.use(productRoutes)

const PORT = 3333;
app.listen(PORT, () => console.log(`Server is running on port ${3333}`));
