// echo 함수 - 일반 함수

(()=>{
  // FIXME string 타입 매개변수를 받고 string 타입을 리턴하는 함수의 타입 지정
  function echoString(msg: string): string {
    return msg;
  }
  // FIXME number 타입 매개변수를 받고 number 타입을 리턴하는 함수의 타입 지정
  function echoNumber(msg: number): number {
    return msg;
  }
  // FIXME boolean 타입 매개변수를 받고 boolean 타입을 리턴하는 함수의 타입 지정
  function echoBoolean(msg: boolean): boolean {
    return msg;
  }

<<<<<<< HEAD
//   console.log(echoString('hello'));
//   console.log(echoNumber(100));
//   console.log(echoBoolean(true));
// })();
=======
  console.log(echoString('hello'));
  console.log(echoNumber(100));
  console.log(echoBoolean(true));
})();
>>>>>>> 5b57fb043164253e1ba8cf94cb7dd7ad18cd1aad
