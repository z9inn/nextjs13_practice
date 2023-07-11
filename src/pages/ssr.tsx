import MeowArticle from "@/components/MeowArticle";
import { getProducts, Product } from "@/service/products";
import Link from "next/link";

type Props = {
  products: Product[];
};
export default function SSRPage({ products }: Props) {
  return (
    <>
      <h1>SSR 제품 소개 페이지</h1>
      <ul>
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

export const getServerSideProps = async () => {
  const products = await getProducts();
  return {
    props: { products },
  };
};
