import Link from "next/link";
import styles from "./layout.module.css";

export const metadata = {
  title: "상품 페이지",
  description: "제품을 판매하는 곳입니다.22",
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <nav className={styles.nav}>
        <Link href="/products/women">여성옷</Link>
        <Link href="/products/man">남성옷</Link>
      </nav>
      <section className={styles.product}>{children}</section>
    </>
  );
}
