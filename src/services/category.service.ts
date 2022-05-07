import { prisma } from "../services/prisma.service";

async function getAll() {
  return await prisma.category.findMany({ include: { menu: true }  });
}

async function getOne(id: number) {
  return await prisma.category.findUnique({ where: { id }, include: { menu: true } });
}

async function create(name: string) {
  return await prisma.category.create({
    data: {
      name
    },
  });
}

async function update(
  id: number,
  name: string,
) {
  return prisma.category.update({
    where: { id },
    data: {
      name
    },
  });
}

async function remove(id: number) {
  return await prisma.category.delete({
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
