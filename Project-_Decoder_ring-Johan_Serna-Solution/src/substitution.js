const substitutionModule = (function () {
 
  const abc = "abcdefghijklmnopqrstuvwxyz";
  function substitution(input, alphabet, encode = true) {
    
    let result="";
  if (alphabet === undefined || alphabet.length !==26  ) return false;
 
    for(let j=0;j<alphabet.length;j++){
      if(alphabet.indexOf(alphabet[j]) !==
         alphabet.lastIndexOf(alphabet[j])){
        return false;
      }
    }
   
for (let i=0; i<input.length;i++){
  const letter = input[i].toLowerCase();
  if(encode === true){
  if(abc.includes(letter)){
    const number = abc.indexOf(letter);
    const newLetter= alphabet[number];
    result+=newLetter;
  }else{
    result+=letter;
  }
}if(encode === false){
   if(alphabet.includes(letter)){
     const number= alphabet.indexOf(letter);
     const newLetter=abc[number];
     result +=newLetter;
   }else{
     result+=letter;
   }
}
} 
  return result;
}

     

  
 
 return {
    substitution,
  };
})();
module.exports = { substitution: substitutionModule.substitution };
