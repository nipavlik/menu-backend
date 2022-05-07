import { prisma } from "../services/prisma.service";

async function getAll() {
  return await prisma.menu.findMany({ include: { category: true } });
}

async function getOne(id: number) {
  return await prisma.menu.findUnique({ where: { id }, include: { category: true } });
}

async function create(title: string, price: number, categoryId: number) {
  return await prisma.menu.create({
    data: {
      title,
      price,
      categoryId,
    },
  });
}

async function update(
  id: number,
  title: string,
  price: number,
  categoryId: number
) {
  return prisma.menu.update({
    where: { id },
    data: {
      title,
      price,
      categoryId,
    },
  });
}

async function remove(id: number) {
  return await prisma.menu.delete({
    where: { id },
  });
}

export default {
  getAll,
  getOne,
  create,
  update,
  remove,
};
