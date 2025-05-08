// 랜덤 고양이 이미지 가져오기 - axios 라이브러리
// ex05-13.ts 복사
import { appendImages } from "./utils.js";
const url = "https://api.thecatapi.com/v1/images/search";
const btn = document.querySelector("button");
btn?.addEventListener("click", getImages);
async function getImages() {
    try {
        const response = await fetch(url);
        console.log(response);
        if (response.ok) {
            const data = await response.json();
            appendImages(data);
        }
        else {
            console.log(response.status, "에러 발생");
        }
    }
    catch (err) {
        console.error("에러 발생", err);
    }
}
