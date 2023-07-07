import Link from "next/link";
import styles from "./layout.module.css";

export default function ProductsPage() {
  const products = ["shirt", "pants", "skirt", "shoes"];
  return (
    <>
      <h1 className={styles.header}>제품 소개 페이지</h1>
      <ul className={styles.li}>
        {products.map((product, index) => (
          <li key={index}>
            <Link href={`/products/${product}`}>{product}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
