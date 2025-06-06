"use strict";
// 인터페이스 사용 - 변수, 함수의 매개변수, 리턴타입
// ex06-09.ts 복사
(() => {
    // 인터페이스를 객체의 타입을 지정
    const u1 = {
        name: "haru",
        age: 25,
    };
    const u2 = {
        name: "hunjin",
        age: 23,
    };
    // 함수의 리턴 타입으로 인터페이스 지정
    const createUser = function (name, age) {
        return { name, age };
    };
    const u3 = createUser("훈진", 25);
    console.log(u3.age, u3.name);
    // 함수의 매개변수의 타입으로 인터페이스 지정
    function getAge(user) {
        return user.name;
    }
    console.log(getAge(u1));
    console.log(getAge(u2));
    console.log(u1.age, u2.name.toUpperCase());
})();
