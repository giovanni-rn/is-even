import { isEven } from "../dist/isEven";

describe("isEven.number", () => {
  it("should return true for even number", () => {
    expect(isEven.number(4)).toBe(true);
  });

  it("should return false for odd number", () => {
    expect(isEven.number(7)).toBe(false);
  });

  it("should return true for odd number with odd params", () => {
    expect(isEven.number(127, "odd")).toBe(true);
  });

  it("should return true for odd negative number with odd params", () => {
    expect(isEven.number(-7, "odd")).toBe(true);
  });

  it("should return false for negative odd number", () => {
    expect(isEven.number(-21)).toBe(false);
  });

  it("should return true for negative even number with even params", () => {
    expect(isEven.number(-44, "even")).toBe(true);
  });

  it("should throw error if number is not integer", () => {
    expect(() => isEven.number(7.5)).toThrow();
  });
});

describe("isEven.string", () => {
  it("should return true for even number", () => {
    expect(isEven.string("4")).toBe(true);
  });

  it("should return false for odd number", () => {
    expect(isEven.string("7")).toBe(false);
  });

  it("should throw error if number is not integer", () => {
    expect(() => isEven.string("7.5")).toThrow();
  });
});

describe("isEven.bigint", () => {
  it("should return true for even number", () => {
    expect(isEven.bigint(4n)).toBe(true);
  });

  it("should return false for even number with odd params", () => {
    expect(isEven.bigint(267757654527542576270n, "odd")).toBe(false);
  });

  it("should return false for odd number", () => {
    expect(isEven.bigint(7n)).toBe(false);
  });
});
