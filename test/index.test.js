import { expect } from "chai";
import { add } from "../src/index.js";

describe("add", () => {
  it("adds two numbers", () => {
    expect(add(2, 3)).to.equal(5);
  });
});
