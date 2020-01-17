const { execSync } = require('child_process');

const expect = require("expect");
const { describe, it } = require("mocha");

describe("OS", () => {
  it("should have the OS timezone set to UTC", () => {
    let output = execSync("date | awk '{print $5}'").toString();

    expect(output.trim()).toEqual("UTC");
  });
});
