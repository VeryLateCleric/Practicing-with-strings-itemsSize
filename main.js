function sentenceCase(sentence) {

    const firstCharacter = sentence[0];
//make new variable called firstCharacter which is set to equal the first input of the sentence  
    let result = firstCharacter.toUpperCase();
  
  
    for (let i = 1; i < sentence.length; i++) {
  
      const character = sentence[i];
  
      result += character.toLowerCase();
  
    }
  
  
    return result;
  
  }