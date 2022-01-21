import { prettifySnakeCase } from "../prettifySnakeCase";

describe("prettifySnakeCase", () => {
  it.each([
    ["", ""],
    ["test", "Test"],
    ["test_name", "Test Name"],
    ["a_b_c", "A B C"],
  ])("converts %s into '%s'", (snakeCaseName, expected) => {
    const result = prettifySnakeCase(snakeCaseName);

    expect(result).toEqual(expected);
  });
});
