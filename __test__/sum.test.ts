import sum from "../helpers/sum";
describe("sum fundtion test", () => {
  it("should sum ", () => {
    expect(sum(1, 2)).toBe(3);
  });
});
