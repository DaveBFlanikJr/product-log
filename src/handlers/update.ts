import prisma from "../db";

//get the updates
export const getUpdates = async (req, res) => {
  const updates = await prisma.product.findUnique({
    where: {
      id: req.product.id,
    },
    include: {
      update: true,
    },
  });
  res.json({ data: updates });
};
