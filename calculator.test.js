const add = require("./calculator.js");

test("should return 0 for an empty string", () => {
  const result = add("");
  console.log(`Test result for empty string: ${result}`);
  expect(result).toBe(0);
});
