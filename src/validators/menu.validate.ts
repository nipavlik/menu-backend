import { body, CustomValidator, param } from "express-validator";
import { prisma } from "../services/prisma.service";
import { isValidCategory } from "./category.validate";
import { validate } from "./validate";

export const isValidIdMenu: CustomValidator = async (id) => {
  let menu = await prisma.menu.findUnique({ where: { id: Number(id) } });
  if (!menu) return Promise.reject("Такого пункта меню не существует");
};

export const validateMenuID = validate([
  param("id")
    .isInt()
    .withMessage("ID пункта меню должен быть числом")
    .bail()
    .custom(isValidIdMenu),
]);

export const validateBodyMenu = validate([
  body("title")
    .notEmpty()
    .withMessage("Название должно быть заполнено")
    .isString()
    .withMessage("Название должно быть строкой"),
  body("price")
    .notEmpty()
    .withMessage("Цена должна быть заполнена")
    .isDecimal()
    .withMessage("Цена должна быть числом"),
  body("categoryId")
    .notEmpty()
    .withMessage("Категория должна быть заполнена")
    .isInt()
    .withMessage("Категория должна быть числом")
    .bail()
    .custom(isValidCategory),
]);
