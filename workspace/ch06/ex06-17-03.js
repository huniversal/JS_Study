"use strict";
// echo 함수 - 제네릭 타입 제약
// ex06-17-02.ts 복사
(() => {
    function echo(msg) {
        return msg;
    }
    function echo2(msg) {
        console.log("msg.length : ", msg.length);
        return msg;
    }
    console.log(echo("hello"));
    console.log(echo(100));
    console.log(echo2("world"));
    console.log(echo2([200, 400]));
})();
