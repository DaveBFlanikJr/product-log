//helper file for the prisma SDK
// will use this so we dont have to create a prisma client everytime
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default prisma;
