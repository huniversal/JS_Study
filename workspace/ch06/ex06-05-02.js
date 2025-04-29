"use strict";
// 유니언 타입과 타입 가드
(() => {
    // 유니온 타입
    // function print(msg: string | number | boolean): void {
    function print(msg) {
        if (typeof msg === "string") {
            // 타입 가드
            console.log(`${msg} 글자수: ${msg.length}`);
        }
        else if (typeof msg === "number") {
            console.log(`${msg} + 10 = ${msg + 10}`);
        }
        else if (typeof msg === "boolean") {
            console.log(`${msg}: ${msg ? "참" : "거짓"}`);
        }
    }
    print("world");
    print(200);
    print(false);
})();
