import MeowArticle from "@/components/MeowArticle";
import { getProducts } from "@/service/products";
import Image from "next/image";
import Link from "next/link";
import styles from "./layout.module.css";
import clothesImage from "../../../public/images/clothes.jpg";

export const revalidate = 3;

export default async function ProductsPage() {
  // throw new Error();

  // 서버 파일(데이터베이스)에 있는 제품의 리스트를 읽어와서, 그걸 보여줌
  const products = await getProducts();
  return (
    <>
      <h1 className={styles.header}>제품 소개 페이지</h1>
      <Image src={clothesImage} alt="Clothes" priority />
      <ul className={styles.li}>
        {products.map(({ id, name }, index) => (
          <li key={index}>
            <Link href={`/products/${id}`}>{name}</Link>
          </li>
        ))}
      </ul>
      <MeowArticle />
    </>
  );
}
