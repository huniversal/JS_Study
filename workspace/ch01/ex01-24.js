/*
JSON 표기법 - 리터럴 방식으로 객체 생성
*/

/*
TODO object 생성자 함수
new Object() - 생성자 함수로 객체 생성
*/

const foo = {
  name: "함수핑",
  age: 25,
  job: "마법사",
  married: false,
};

console.log(foo["name"], foo.age, foo.job, foo["married"]);
console.log(typeof foo, foo.toString(), foo);
