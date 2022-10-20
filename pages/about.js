import React from "react";
import styles from "../styles/Home.module.css";
import Image from "next/image";

export default function about() {
  return (
      <div className={styles.main}>
      <title>About</title>
      <h1>본인이 즐겨보았던 추리소설 5권</h1>
      <p/>
      <Image src="/keigo1.jpg" alt="용의자 X의 헌신" width={300} height={450}/>
      <h2>용의자 X의 헌신</h2>
      <g>작가 : 히가시노 게이고</g>
      <g>장르 : 추리</g>
      <g>발매일 : 2006년 08월 10일</g>
      <p/>
      <a href="http://www.yes24.com/Product/Goods/2131596"
      target='_blank'>
        <button onlick="move"><h4>Yes24 페이지로 이동</h4></button></a>
      <p/><p/>
      <Image src="/keigo2.jpg" alt="가면산장 살인사건" width={300} height={450}/>
      <h2>가면산장 살인사건</h2>
      <g>작가 : 히가시노 게이고</g>
      <g>장르 : 추리, 스릴러</g>
      <g>발매일 : 2014년 09월 26일</g>
      <p/>
      <a href="http://www.yes24.com/Product/Goods/2131596"
      target='_blank'>
        <button onlick="move"><h4>Yes24 페이지로 이동</h4></button></a>
      <p/><p/>
      <Image src="/keigo3.jpg" alt="방과 후" width={300} height={450}/>
      <h2>방과 후</h2>
      <g>작가 : 히가시노 게이고</g>
      <g>장르 : 추리, 스릴러</g>
      <g>발매일 : 2007년 07월 25일</g>
      <p/>
      <a href="http://www.yes24.com/Product/Goods/2131596"
      target='_blank'>
        <button onlick="move"><h4>Yes24 페이지로 이동</h4></button></a>
      <p/><p/>
      <Image src="/keigo4.jpg" alt="블랙 쇼맨과 이름없는 마을의 살인" width={300} height={450}/>
      <h2>블랙 쇼맨과 이름없는 마을의 살인</h2>
      <g>작가 : 히가시노 게이고</g>
      <g>장르 : 추리, 미스터리</g>
      <g>발매일 : 2020년 11월 30일</g>
      <p/>
      <a href="http://www.yes24.com/Product/Goods/2131596"
      target='_blank'>
        <button onlick="move"><h4>Yes24 페이지로 이동</h4></button></a>
      <p/><p/>
      <Image src="/gwan.jpg" alt="관" width={300} height={450}/>
      <h2>관</h2>
      <g>작가 : 아르노 슈트로벨</g>
      <g>장르 : 추리, 미스터리</g>
      <g>발매일 : 2013년 01월 16일</g>
      <p/>
      <a href="http://www.yes24.com/Product/Goods/2131596"
      target='_blank'>
        <button onlick="move"><h4>Yes24 페이지로 이동</h4></button></a>
      </div>
  );
}