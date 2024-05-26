const add = require("./calculator.js");

test("should return 0 for an empty string", () => {
  const result = add("");
  console.log(`Test result for empty string: ${result}`);
  expect(result).toBe(0);
});

test('should return the number itself when a single number is provided', () => {
    const result = add("1");
    console.log(`Test result for single number "1": ${result}`);
    expect(result).toBe(1);
  });