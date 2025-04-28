// 타입 별칭으로 객체의 타입 선언

<<<<<<< HEAD
(() => {})();
=======
(()=>{
  // 타입 별칭 생성
  type User = {
    name: string;
    age: number;
  };

  const u1: User = {
    name: 'haru',
    age: 5
  };
  const u2: User = {
    name: 'namu',
    age: 8
  };
  
  console.log(u1.age, u2.name.toUpperCase());
})();
>>>>>>> 462ed6b9203790196c8cb4d83a59c27f1845be65
