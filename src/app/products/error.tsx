"use client";

import React, { useEffect } from "react";

// 컴포넌트 파라미터에 타입 선언 하기 싫으면 Props로 대체
// type Props = {
//     error: Error;
//     reset: () => void;
// }

const ProductsError = ({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) => {
  useEffect(() => {
    console.error(error);
  }, [error]);
  return (
    <div>
      <h2>Something went wrong!</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
};

export default ProductsError;
