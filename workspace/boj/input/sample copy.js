function main() {
  const data = getData();
  console.log(data);
}
main();

function getData() {
  const fs = require("fs");
  const fileData = fs.readFileSync(0).toString();
  const arr = fileData.trim().split("\n");

  const result = []; // 리턴할 2차원 배열

  for (let row of arr) {
    // '23 48', '25'
    const rowArr = row.split(" "); // ['23', '48'], ['25']
    for (let k = 0; k < rowArr.length; k++) {
      rowArr[k] = isNaN(rowArr[k]) ? rowArr[k] : parseInt(rowArr[k]);
    }
    result.push(rowArr);
  }
  return result;
}
