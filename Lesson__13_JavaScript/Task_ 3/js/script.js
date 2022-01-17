let fieldCoords = field.getBoundingClientRect();

let answer = [
  [
    // 1
    fieldCoords.left,
    fieldCoords.top,
  ],
  [
    // 2
    fieldCoords.right,
    fieldCoords.bottom,
  ],
  [
    // 3
    fieldCoords.left + field.clientLeft,
    fieldCoords.top + field.clientTop,
  ],
  [
    // 4
    fieldCoords.left + field.clientLeft + field.clientWidth,
    fieldCoords.top + field.clientTop + field.clientHeight,
  ],
];

alert(answer.join("  "));
