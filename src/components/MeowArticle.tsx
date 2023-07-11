"use client";
import React, { useEffect, useState } from "react";
import styles from "./MeowArticle.module.css";

const MeowArticle = () => {
  const [text, setText] = useState("데이터 준비 중...");

  useEffect(() => {
    fetch("https://meowfacts.herokuapp.com").then((res) =>
      res.json().then((data) => setText(data.data[0]))
    );
  }, []);

  //   useEffect(() => {
  //     const fetchFact = async () => {
  //       const res = await fetch("https://meowfacts.herokuapp.com", {
  //         cache: "reload",
  //         next: { revalidate: 3 },
  //       });
  //       const data = await res.json();
  //       const fact = data.data[0];
  //       setText(fact);
  //     };

  //     fetchFact();
  //   }, []);

  return (
    <>
      <article className={styles.article}>{text}</article>
    </>
  );
};

export default MeowArticle;
