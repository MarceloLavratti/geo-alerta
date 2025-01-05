import express from "express";
import { registerUser } from "../controllers/userController.js";
import { body } from "express-validator";

const router = express.Router();

// Rota para cadastrar um usuário com validação
router.post(
  "/register",
  [
    body("name").notEmpty().withMessage("O nome é obrigatório"),
    body("email").isEmail().withMessage("Por favor, forneça um e-mail válido"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("A senha deve ter pelo menos 6 caracteres"),
  ],
  registerUser
);

export default router;
