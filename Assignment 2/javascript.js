function calculate(length, width) {
  let area = length * width;

  return {
    area: area,
  };
}
let length = 30;
let width = 7;
let result = calculate(length, width);

console.log(`Area of the rectangle: ${result.area}`);
