const { template } = require('@babel/core')

function fillStartWord(startWord, word) {

if(typeof word===null || typeof word===undefined){
    return undefined;
}

let fullword; 
fullword.includes(startWord) ? (fullword=word) : (fullword=startWord+word) ;

  return fullword;
}
module.exports = fillStartWord