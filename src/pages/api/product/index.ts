// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getProducts, Product } from "@/service/products";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Product[]>
) {
  if (req.method === "GET") {
    const products = await getProducts();
    return res.status(200).json(products);
  }
  res.status(200);
}
