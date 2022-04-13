const CODES = {
  A: 65,
  Z: 90,
};
function createCell() {
  return `
    <div class="cell" contenteditable></div>
    `;
}
function createCol(text) {
  return `
    <div class="column">${text}</div>
    `;
}
function createRow(content, index) {
  return `
    <div class="row">
        <div class="row-info">${index || ""}</div>
        <div class="row-data">${content || ""}</div>
    </div>
    `;
}
function toChar(_, index) {
  return String.fromCharCode(CODES.A + index);
}
export function createTable(rowsCount = 24) {
  const colsCount = CODES.Z - CODES.A;
  const rows = [];
  const cells = new Array(colsCount).fill("").map(createCell).join("");
  const cols = new Array(colsCount)
    .fill("")
    .map(toChar)
    .map(createCol)
    .join("");

  rows.push(createRow(cols));

  for (let i = 0; i < rowsCount; i++) {
    rows.push(createRow(cells, i + 1));
  }
  return rows.join("");
}
