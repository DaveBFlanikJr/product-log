import prisma from "../db";

//get the updates
export const getUpdates = async (req, res) => {
  const products = await prisma.product.findMany({
    where: {
      belongsToID: req.user.id,
    },
    include: {
      update: true,
    },
  });

  // Not optimal... need to redesign schema
  const updates = products.reduce((allUpdates, product) => {
    return [...allUpdates, ...product.update];
  }, []);

  res.json({ data: updates });
};
// get one update
export const getUpdate = async (req, res) => {
  const update = prisma.update.findUnique({
    where: {
      id: req.params.id,
    },
  });
  res.json({ data: update });
};
//create an update
export const createUpdate = async (req, res) => {
  const product = await prisma.product.findUnique({
    where: {
      id: req.body.id,
    },
  });
  if (!product) {
    //product does not belong to user
    res.json({ message: "This user does not have this product" });
  }
  const update = await prisma.update.create({
    data: req.body,
  });

  res.json({ data: update });
};

//update an update
export const updateUpdate = async (req, res) => {
  const products = await prisma.product.findMany({
    where: {
      belongsToID: req.user.id,
    },
    include: {
      update: true,
    },
  });

  const updates = products.reduce((allUpdates, product) => {
    return [...allUpdates, ...product.update];
  }, []);

  const match = updates.find((update) => update.id === req.params.id);

  if (!match) {
    //handle
    return res.json({ message: "Not found" });
  }

  const updatedUpdate = await prisma.update.update({
    where: {
      id: req.params.id,
    },
    data: req.body,
  });

  res.json({ data: updatedUpdate });
};

// delete an update
export const deleteUpdate = async (req, res) => {
  const products = await prisma.product.findMany({
    where: {
      belongsToID: req.user.id,
    },
    include: {
      update: true,
    },
  });

  const updates = products.reduce((allUpdates, product) => {
    return [...allUpdates, ...product.update];
  }, []);

  const match = updates.find((update) => update.id === req.params.id);

  if (!match) {
    //handle
    return res.json({ message: "Can not delete this update" });
  }

  const deleted = await prisma.update.delete({
    where: {
      id: req.params.id,
    },
  });

  res.json({ data: deleted });
};
