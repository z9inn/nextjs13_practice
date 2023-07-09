"use client";
import React, { useState } from "react";

export default function Counter() {
  console.debug("하이 --- 클라이언트@@@");
  const [count, setCount] = useState(0);
  return (
    <>
      <p>{count}</p>
      <button onClick={() => setCount((num) => num + 1)}>
        숫자 증가 시키기
      </button>
    </>
  );
}
