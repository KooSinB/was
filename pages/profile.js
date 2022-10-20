import React from "react";
import styles from "../styles/Home.module.css";
import Image from "next/image";

export default function profile() {
  const name = "지영욱";
  const born = "1999년 03월 20일";
  const major = "정보보호학과";
  const email = "khiyaj0320@gmail.com";
  return (
    <div className={styles.main}>
      <title>Profile</title>
      <h1>Profile</h1>
      <Image src="/profile.jpg" alt="Profile Image" width={400} height={400}/>
      <h3>이름 : {name}</h3>
      <h3>출생년도 : {born}</h3>
      <h3>전공 : {major}</h3>
      <h3>E-mail : {email}</h3>
    </div>
  );
}