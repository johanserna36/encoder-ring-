// Write your tests here!
const { expect } = require("chai");
const caesarModule = require("../src/caesar");

describe("caesar", () => {
  it("should return a decoded message when shift value is false", () => {
        const actual = caesarModule.caesar("bpqa umaaiom!", 8, false);
    const expected = "this message!"; 
        expect(actual).to.eql(expected);
  });
  it("should return a encoded message when shift value is true", () => {
        const actual = caesarModule.caesar("This message!", 8);
    const expected = "bpqa umaaiom!";
    expect(actual).to.eql(expected);
  });
   it("should leave spaces as is", () => {
        const actual = caesarModule.caesar("abc !", 4);
        const expected = " "
        expect(actual.charAt(3)).to.equal(expected);
    });
    it("should leave special characters", () => {
        const actual = caesarModule.caesar("abc @", 4);
        const expected = "@"
        expect(actual.charAt(4)).to.equal(expected);
    });
    it("should wrap characters around when going over 'z'", () => {
        const actual = caesarModule.caesar("amazing", 3);
      const expected = "dpdclqj";
        expect(actual).to.equal(expected);
    });
  it("should ignore capita letters", () => {
    const actual = caesarModule.caesar("Hey", 2);
    const expected = "jga";
    expect(actual).to.eql(expected);
  });
  it("should return false if the shift parameter is not present", () => {
    const actual = caesarModule.caesar("thinkful");
    expect(actual).to.be.false;
it("should return false if the shift is greater than 25", () => {
        const actual = caesarModule.caesar("Johan Serna!", 48);
        expect(actual).to.be.false; 
    });
    it("should return false if the shift is less than -25", () => {
        const actual = caesarModule.caesar("Johan Serna!", -32);
        expect(actual).to.be.false; 
    });
    it("should return false if the shift is 0", () => {
        const actual = caesarModule.caesar("Johan Serna!", 0);
        expect(actual).to.be.false; 
    });
  });
});