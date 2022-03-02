import { Router } from "express";

import { productRoutes } from "./product.routes";
import { userRoutes } from "./user.routes";

const router = Router();

router.use("/products", productRoutes);
router.use("/users", userRoutes);

export { router };
