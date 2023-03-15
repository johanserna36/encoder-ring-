// Write your tests here!
const { expect } = require("chai");
const substitutionModule = require("../src/substitution");
describe("substitution", () => {
  
  it("should return a decoded message when encode value is false", () => {
 const actual = substitutionModule.substitution("jrufscpw","xoyqmcgrukswaflnthdjpzibev" , false);
 const expected = "thinkful"; 
  expect(actual).to.eql(expected);
  });
  
   it("should return a encoded message when encode value is true", () => {
 const actual = substitutionModule.substitution("thinkful","xoyqmcgrukswaflnthdjpzibev" , true);
  const expected = "jrufscpw"; 
   expect(actual).to.eql(expected);
  });
  
  it("should leave spaces as is", () => {
 const actual = substitutionModule.substitution("You are an excellent spy","xoyqmcgrukswaflnthdjpzibev" , true);
  const expected = "elp xhm xf mbymwwmfj dne"; 
   expect(actual).to.eql(expected);
  });
  
   it("the alphabet could include special characters", () => {
 const actual = substitutionModule.substitution("message","$wae&zrdxtfcygvuhbijnokmpl" , true);
  const expected = "y&ii$r&"; 
   expect(actual).to.eql(expected);
  });
  
    it("the alphabet could include special characters is encode value is false", () => {
 const actual = substitutionModule.substitution("y&ii$r&","$wae&zrdxtfcygvuhbijnokmpl" , false);
  const expected = "message"; 
   expect(actual).to.eql(expected);
  });
  
     it("must return false is alphabet is not 26 characters", () => {
 const actual = substitutionModule.substitution("thinkful","short" , false);
  const expected = false; 
   expect(actual).to.eql(expected);
  });
    it("all alphabet characters must be unique", () => {
 const actual = substitutionModule.substitution("thinkful","abcabcabcabcabcabcabcabcyz" , false);
  const expected = false; 
   expect(actual).to.eql(expected);
  });
  
  
});