"use client";

import Link from "next/link";

export default function Home() {
  const googleOauthUrl = "http://localhost:4000/auth/google";
  const kakaoOauthUrl = "http://localhost:4000/auth/kakao";
  const naverOauthUrl = "http://localhost:4000/auth/naver";

  return (
    <div className="flex-center flex-col min-h-screen">
      <div>별조각</div>
      <div>오늘 당신의 별은 어떻게 움직일까요?</div>
      <Link href={googleOauthUrl}>구글 로그인</Link>
      <Link href={kakaoOauthUrl}>카카오 로그인</Link>
      <Link href={naverOauthUrl}>네이버 로그인</Link>
    </div>
  );
}
