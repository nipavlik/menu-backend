import { NextFunction, Request, Response } from "express";
import categoryService from "../services/category.service"

async function getAll(req: Request, res: Response, next: NextFunction) {
  const menu = await categoryService.getAll()

  res.json(menu)
}

async function getOne(req: Request, res: Response, next: NextFunction) {
  const { id } = req.params;
  const menu = await categoryService.getOne(Number(id))

  res.json(menu)
}

async function create(req: Request, res: Response, next: NextFunction) {
  const { name } = req.body;
  const newCategory = await categoryService.create(name)

  res.json(newCategory)
}

async function update(req: Request, res: Response, next: NextFunction) {
  const { id } = req.params;
  const { name } = req.body;

  const updatedCategory = await categoryService.update(Number(id), name)

  res.json(updatedCategory)
}

async function remove(req: Request, res: Response, next: NextFunction) {
  const { id } = req.params;
  const removedCategory = await categoryService.remove(Number(id))

  res.json(removedCategory)
}

export default {
  getAll,
  getOne,
  create,
  update,
  remove,
};
