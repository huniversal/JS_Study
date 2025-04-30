// 주요 내장 함수 - clearTimeout
// ex07-02.ts 복사

(() => {
  console.log("시작");
  const timerId = setInterval((a: number, b: number) => {
    console.log("3초 간격으로 실행", a + b);
  }, 1000 * 3); // 3초 간격
  // clearInterval(timerId);
  console.log("종료");
})();
