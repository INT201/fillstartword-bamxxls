const { template } = require('@babel/core')

// function fillStartWord(startWord, word) {

// if(word===null || word===undefined){
//     return undefined;
// }

// let fullword; 
// word.includes(startWord) ? (fullword=word) : (fullword=startWord+word);
//   return fullword;

  if(!word){
    return undefined
  }
  if(word.includes(startWord)){
    return word
  }
  return startWord.concat(word)
}
module.exports = fillStartWord
