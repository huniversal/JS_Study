"use strict";
// 선택적 파라미터(optional parameter)
// 옵셔널 파라미터
(() => {
    function user(name, age) {
        console.log(name, age);
    }
    user("하루", 5);
    user("나무");
})();
