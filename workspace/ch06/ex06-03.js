"use strict";
// 함수에 타입 지정
(() => {
    function getCount(count) {
        // return count; // 타입 에러
        return "Count: " + count;
    }
    // ㅣet result = getCount(20); // 타입 에러
    let result = getCount(20);
    console.log(result);
})();
