// .ts는 컴포넌트가 아니라 순수 타입스크립트 로직만 들어있을 때 사용함
// .tsx는 컴포넌트가 있을 때

import path from "path";
import { promises as fs } from "fs";

export type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
};
export async function getProducts(): Promise<Product[]> {
  // for (let i = 0; i < 1000000; i++) {}
  const filePath = path.join(process.cwd(), "data", "products.json");
  const data = await fs.readFile(filePath, "utf-8");
  return JSON.parse(data);
}

export async function getProduct(id: string): Promise<Product | undefined> {
  const products = await getProducts();
  return products.find((item) => item.id === id);
}
