import { Router } from "express";
import { UserRepository } from "../repository/UserRepository";
import { hash } from "bcrypt";

const userRoutes = Router();

userRoutes.post("/", async (request, response) => {
  const { name, email, password } = request.body;

  try {
    const userRepository = new UserRepository();

    const passwordHash = await hash(password, 8);

    userRepository.create({ name, email, password: passwordHash });

    return response.status(201).send();
  } catch (error) {
    console.log(`Error: ${error}`);
  }
});

export { userRoutes };
