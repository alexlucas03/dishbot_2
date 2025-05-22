import { PrismaPg } from '@prisma/adapter-pg'
import { PrismaClient } from "@/generated/prisma/client";

let prisma: PrismaClient;

try {
    const connectionString = process.env.DB_LINK;
  
    const adapter = new PrismaPg({ connectionString });
    prisma = new PrismaClient({ adapter });
  
} catch (error) {
  console.error("Error initializing Prisma:", error);
  throw error;
}

export default prisma;