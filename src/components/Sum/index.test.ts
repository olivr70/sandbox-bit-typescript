import { sum } from "./index";

describe("sum", () => {
  it("should return 33 for 10+11+12", () => {
    expect(sum(10, 11, 12)).toBe(33);
  });
  it("should return 0 for no parameters", () => {
    expect(sum()).toBe(0);
  });
  it("should return 0 for 10 - 10", () => {
    expect(sum(10, -10)).toBe(0);
  });
});
