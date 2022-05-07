import { NextFunction, Request, Response } from "express";
import menuService from "../services/menu.service"

async function getAll(req: Request, res: Response, next: NextFunction) {
  const menu = await menuService.getAll()

  res.json(menu)
}

async function getOne(req: Request, res: Response, next: NextFunction) {
  const { id } = req.params;
  const menu = await menuService.getOne(Number(id))

  res.json(menu)
}

async function create(req: Request, res: Response, next: NextFunction) {
  const { title, price, categoryId } = req.body;
  const newMenu = await menuService.create(title, price, categoryId)

  res.json(newMenu)
}

async function update(req: Request, res: Response, next: NextFunction) {
  const { id } = req.params;
  const { title, price, categoryId } = req.body;

  const updatedMenu = await menuService.update(Number(id), title, price, categoryId)

  res.json(updatedMenu)
}

async function remove(req: Request, res: Response, next: NextFunction) {
  const { id } = req.params;
  const removedMenu = await menuService.remove(Number(id))

  res.json(removedMenu)
}

export default {
  getAll,
  getOne,
  create,
  update,
  remove,
};
