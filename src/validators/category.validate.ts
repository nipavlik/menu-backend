import { body, CustomValidator, param } from "express-validator";
import { prisma } from "../services/prisma.service";
import { validate } from "./validate";

export const isValidCategory: CustomValidator = async (id) => {
  let category = await prisma.category.findUnique({
    where: { id: Number(id) },
  });
  if (!category) return Promise.reject("Такой категории не существует");
};

export const validateCategoryID = validate([
  param("id")
    .isInt()
    .withMessage("ID категории должна быть числом")
    .bail()
    .custom(isValidCategory),
]);

export const validateBodyCategory = validate([
  body("name")
    .notEmpty()
    .withMessage("Название должно быть заполнено")
    .isString()
    .withMessage("Название должно быть строкой"),
]);
