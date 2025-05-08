"use strict";
// 에러 핸들링 - Error 객체
(() => {
    function f1() {
        const err = new Error("에러 발생!!");
        console.log(err.name); // 에러 이름 -> 기본은 "Error", 커스텀 가능
        console.log(err.message); // new Error()에 넣은 메시지 그대로 찍힘
        console.log(err.stack); // 콜 스택 정보, 에러가 발생한 시점의 콜스택 정보가 들어있는 문자열
    }
    function f2() {
        f1();
    }
    f2();
})();
