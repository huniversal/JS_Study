"use strict";
// 내장 객체 - Date
(() => {
  const startDate = dayjs("2025-03-27"); // 특정 날짜 넘겨도 된다
  const finishDate = dayjs("2025-08-08"); // 년, 월(0부터 시작), 일

  console.log("JS 수업 시작일", getDate(startDate));
  console.log("수료일", getDate(finishDate));

  const today = dayjs(); // 현재 시간
  const diffDays = today.diff(startDate, "day");
  console.log(`오늘은 수업 시작일로부터 ${diffDays}일째입니다.`);

  const diffFinishDays = finishDate.diff(today, "day");
  console.log(`수업 종료일까지 ${diffFinishDays}일 남았습니다.`);

  const hundredDaysLater = startDate.add(100, "day");
  console.log(
    `우리 만난지 백일째 되는 날은 ${getDate(hundredDaysLater)}일 입니다.`
  );
  function getDate(date) {
    return date.format("YYYY-MM-DD");
  }
})();
