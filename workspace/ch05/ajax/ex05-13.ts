// 랜덤 고양이 이미지 가져오기 - Fetch API 사용
// ex05-12.ts 복사

// 랜덤 고양이 이미지 가져오기 - XMLHttpRequest 사용

import { type Cat } from "./types.js";
import { appendImages } from "./utils.js";

const url = "https://api.thecatapi.com/v1/images/search";

const btn = document.querySelector("button");

btn?.addEventListener("click", getImages);

async function getImages() {
  try {
    const response = await fetch(url);
    // fetch()로 API 요청 보냄
    // await는 기다렸다가 응답 받는다.
    console.log(response);
    if (response.ok) {
      // response.ok는 HTTP 요청이 성공적으로 처리됐는지 확인하는 값
      const data = await response.json();
      appendImages(data);
      // 요청에 성공했으면 .json()으로 데이터 꺼냄
      // appendImages(data)로 화면에 추가
    } else {
      console.log(response.status, "에러 발생");
    } // 실패하면 상태코드 찍고 에러 메시지 출력
  } catch (err) {
    console.error("에러 발생", err);
  } // fetch() 자체가 실패할 경우
}
