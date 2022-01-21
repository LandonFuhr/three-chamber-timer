import { formatTimeFromMs } from "../formatTimeFromMs";

describe("formatTimeFromMs", () => {
  it.each([
    [0, "0:00.000"],
    [1, "0:00.001"],
    [999, "0:00.999"],
    [1000, "0:01.000"],
    [59_999, "0:59.999"],
    [60_000, "1:00.000"],
    [599_999, "9:59.999"],
    [600_000, "10:00.000"],
  ])("converts %s ms into '%s'", (timeInMs, expected) => {
    const result = formatTimeFromMs(timeInMs);

    expect(result).toEqual(expected);
  });
});
