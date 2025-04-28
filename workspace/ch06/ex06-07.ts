// 타입 별칭으로 객체의 타입 선언

(() => {
  // 타입의 별칭 생성
  type User = {
    name: string;
    age: number;
  };
  const u1: User = {
    name: "hunjin",
    age: 20,
  };
  const u2: User = {
    name: "daun",
    age: 30,
  };
  console.log(u1.age, u2.name.toUpperCase);
})();
