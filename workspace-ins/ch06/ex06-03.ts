// 함수에 타입 지정

(()=>{
  function getCount(count: number): string {
    // return count; // 타입 에러
    return 'Count: ' + count;
  }

  // let result = getCount('20'); // 타입 에러
  let result/* : string  */= getCount(20);

<<<<<<< HEAD
//   console.log(result);
// })();
=======
  console.log(result);
})();
>>>>>>> 462ed6b9203790196c8cb4d83a59c27f1845be65
