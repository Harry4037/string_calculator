const { add } = require("./Calculator");

describe("String Calculator", () => {
  it("return 0 value for an empty string", () => {
    expect(add("")).toBe(0);
  });

  it("return the number for a single number", () => {
    expect(add("2")).toBe(2);
  });

  it("return the sum for two numbers", () => {
    expect(add("1,2")).toBe(3);
  });

  it("return the sum for multiple numbers", () => {
    expect(add("1,2,3,4")).toBe(10);
  });

  it("throw error when a non numeric number is encountered", () => {
    expect(() => add("1,abc,2")).toThrow("non numeric value not allowed: abc");
  });

  it("allow newline as a separator", () => {
    expect(add("1\n2,3,4\n5")).toBe(15);
  });

});
