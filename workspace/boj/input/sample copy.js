function main() {
  const data = getData();
  console.log(data);
}
main();

function getData() {
  const fs = require("fs");
  const fileData = fs.readFileSync(0).toString();
  const arr = fileData.trim().split("\n");

  const result = [];

  for (let row of arr) {
    const rowArr = row.split(" "); // ['23', '48'], ['25']
    for (let element of rowArr) {
      element = isNaN(element) ? element : parseInt(element);
    }
    result.push(rowArr);
  }
  return result;
}
