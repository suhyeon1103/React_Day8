import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const filmFindMany = async (pageStart, pageEnd) => {
  return prisma.film.findMany({
    skip: pageStart,
    take: pageEnd,
  });
};

export const filmFindOne = async (film_id) => {
  return prisma.film.findUnique({
    where: {
      film_id: film_id,
    },
  });
};

//findFirst
