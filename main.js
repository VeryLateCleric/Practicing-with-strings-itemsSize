function sentenceCase(sentence) {

    const firstCharacter = sentence[0];
//make new variable called firstCharacter which is set to equal the first input of the sentence  
    let result = firstCharacter.toUpperCase();
//create new variable called result set to = firstCharacter and changes that result toUpperCase
      for (let i = 1; i < sentence.length; i++) {
//now begin for loop at position 1 not 0 bc 0 is the first letter, and we want the second. i will skip over 0 and go until the sentence ltngh is reached   
      const character = sentence[i];
// now declare new variable which corresponds to each character in the sentence that satisfiesthe for loop (i.e. not character 0)  
      result += character.toLowerCase();
// change variable character toLowerCase and add to result variable
    }
  
  
    return result;
//   return result pretty sure
  }