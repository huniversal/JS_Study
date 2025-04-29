// echo 함수 - 제네릭 타입 제약
// ex06-17-02.ts 복사

(() => {
  function echo<T extends string | number>(msg: T): T {
    return msg;
  }
  function echo2<T extends { length: number }>(msg: T): T {
    console.log("msg.length : ", msg.length);
    return msg;
  }

  console.log(echo<string>("hello"));
  console.log(echo<number>(100));
  console.log(echo2<string>("world"));
  console.log(echo2<number[]>([200, 400]));
})();
