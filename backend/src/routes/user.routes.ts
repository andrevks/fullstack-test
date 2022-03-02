import { Router } from "express";
import { UserRepository } from "../repository/UserRepository";
import { hash } from "bcryptjs";

const userRoutes = Router();

userRoutes.get("/", (request, response) =>
  response.send(`<h1>FUNFANDO HUEHUE</h1>`)
);

userRoutes.post("/", async (request, response) => {
  const { name, email, password } = request.body;

  try {
    const userRepository = new UserRepository();

    const userAlreadyExists = await userRepository.findByEmail(email);

    if (userAlreadyExists) {
      return response.status(400).json({ error: "User Already exists!" });
    }

    const passwordHash = await hash(password, 8);

    userRepository.create({ name, email, password: passwordHash });

    return response.status(201).send();
  } catch (error) {
    console.log(`Error: ${error}`);
  }
});

export { userRoutes };
