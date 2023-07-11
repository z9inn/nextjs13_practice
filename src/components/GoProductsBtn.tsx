"use client";

import { useRouter } from "next/navigation";
import React from "react";

const GoProductsBtn = () => {
  const route = useRouter();
  return (
    <>
      <button
        onClick={() => {
          //   route.push("/products");
          route.back();
        }}
      >
        제품 페이지로 이동
      </button>
    </>
  );
};

export default GoProductsBtn;
