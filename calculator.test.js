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
  
});
