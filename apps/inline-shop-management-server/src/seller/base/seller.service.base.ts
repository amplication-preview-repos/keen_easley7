/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  Seller as PrismaSeller,
  Product as PrismaProduct,
  User as PrismaUser,
} from "@prisma/client";

export class SellerServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.SellerCountArgs, "select">): Promise<number> {
    return this.prisma.seller.count(args);
  }

  async sellers<T extends Prisma.SellerFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.SellerFindManyArgs>
  ): Promise<PrismaSeller[]> {
    return this.prisma.seller.findMany<Prisma.SellerFindManyArgs>(args);
  }
  async seller<T extends Prisma.SellerFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.SellerFindUniqueArgs>
  ): Promise<PrismaSeller | null> {
    return this.prisma.seller.findUnique(args);
  }
  async createSeller<T extends Prisma.SellerCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.SellerCreateArgs>
  ): Promise<PrismaSeller> {
    return this.prisma.seller.create<T>(args);
  }
  async updateSeller<T extends Prisma.SellerUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.SellerUpdateArgs>
  ): Promise<PrismaSeller> {
    return this.prisma.seller.update<T>(args);
  }
  async deleteSeller<T extends Prisma.SellerDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.SellerDeleteArgs>
  ): Promise<PrismaSeller> {
    return this.prisma.seller.delete(args);
  }

  async findProducts(
    parentId: string,
    args: Prisma.ProductFindManyArgs
  ): Promise<PrismaProduct[]> {
    return this.prisma.seller
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .products(args);
  }

  async getUser(parentId: string): Promise<PrismaUser | null> {
    return this.prisma.seller
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }
}
