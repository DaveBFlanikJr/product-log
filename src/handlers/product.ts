import prisma from "../db";

// Get all the products
export const getProducts = async (req, res) => {
  const user = await prisma.user.findUnique({
    where: {
      id: req.user.id,
    },
    include: {
      products: true,
    },
  });
  res.json({ data: user.products });
};

// Get a single product
export const getProduct = async (req, res) => {
  // get the id
  const id = req.id.params.id;
  //now we can get the product that has the ID and belongs to the user
  const product = await prisma.product.findFirst({
    where: {
      id,
      belongsToID: req.user.id,
    },
  });
  res.json({ data: product });
};
