const { add } = require("./Calculator");

describe("String Calculator", () => {
  it("return 0 value for an empty string", () => {
    expect(add("")).toBe(0);
  });
});
