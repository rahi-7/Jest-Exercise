const { addTwoNumbers, subtractTwoNumbers } = require("./calculator");

test("add two numbers", () => {
    expect(addTwoNumbers(0, 0)).toBe(0);
    expect(addTwoNumbers(1, 1)).toBe(2);
    expect(addTwoNumbers(-1, -1)).toBe(-2);
})

test("subtract two numbers", () => {
    expect(subtractTwoNumbers(0, 0)).toBe(0);
    expect(subtractTwoNumbers(1, 1)).toBe(0);
    expect(subtractTwoNumbers(-1, -1)).toBe(0);
    expect(subtractTwoNumbers(5, 2)).toBe(3);
})