// 유니언 타입

(()=>{

  // FIXME 타입 에러가 발생하지 않도록 함수의 타입을 지정하세요.
  function logMessage(msg: string | number) {
    console.log(msg);
  }

  function warnMessage(msg: number | string) {
    // 스타일 적용
    console.log(`%c${msg}`, 'color: yellow; font-size: 20px;');
  }

<<<<<<< HEAD
//   logMessage('hello');
//   logMessage(100);
//   warnMessage('bye');
//   warnMessage(200);
// })();
=======
  logMessage('hello');
  logMessage(100);
  warnMessage('bye');
  warnMessage(200);
})();
>>>>>>> 462ed6b9203790196c8cb4d83a59c27f1845be65
