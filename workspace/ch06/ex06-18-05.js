"use strict";
// 드롭다운 리스트 생성 - 제네릭 인터페이스와 함수
// ex06-18-04.ts 복사
// 드롭다운 리스트 생성 - 유니온 타입
// ex06-18-03.ts 복사
// 드롭다운 리스트 생성 - 타입스크립트
// ex06-18-02.js 복사
// 드롭다운 리스트 생성 - 자바스크립트
(() => {
    const cityList = [
        { value: "Seoul", selected: false },
        { value: "busan" },
        { value: "GwangJu", selected: true },
        // { value: 56789 },
    ];
    const zipcodeList = [
        { value: 12345, selected: false },
        { value: 34567, selected: true },
        { value: 56789 },
    ];
    // FIXME: 아래 출력 결과와 같이 출력 되도록 함수 작성
    // function createDropdownList(list: DropdownItem<string | number>[]) {
    function createDropdownList(list) {
        let value;
        let options = "";
        for (let item of list) {
            value = item.value;
            options += `\t<option selected="${item.selected ? "selected" : ""}">${typeof value === "string" ? value.toUpperCase() : value}</option>\n`;
        }
        return `<select>\n${options}</select>`;
    }
    console.log(createDropdownList(cityList));
    console.log(createDropdownList(zipcodeList));
})();
