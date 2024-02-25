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

/*
  Complete the function below according to the instructions.
  
  When the function's parameters reference `products`, they are referencing an array of objects. Each object has the following shape:
   {
     name: "Slip Dress",
     priceInCents: 8800,
     availableSizes: [ 0, 2, 4, 6, 10, 12, 16 ]
   }
*/
function listAllItems(products) {
    for (let i = 0; i < products.length; i++) {
      const itemForSale = products[i];
  
      console.log(`Name ${i + 1}:${itemForSale.name}`); // item num and name
      console.log(`Price: ${itemForSale.priceInCents}`); //  price in cents TODO: show in dollars
      console.log(`Available Sizes: ${itemForSale.availableSizes}`);
      
      const availableSizes = itemForSale.availableSizes;
      const firstSize = availableSizes[0];
      const lastSize = availableSizes[availableSizes.length - 1];

      console.log(`Available Sizes: ${firstSize}-${lastSize}`);

 
    }
  }
  
  
  const exampleArray = [
    { name: "Nonslip Dress", priceInCents: 4400, availableSizes: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44] },
    { name: "Cool Dress", priceInCents: 6000, availableSizes: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44] },
    { name: "Hot Dress", priceInCents: 8000, availableSizes: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44] }
  ]
  //just normal dresses everyone wears
  module.exports = {
    listAllItems,
  };
  
  listAllItems(exampleArray)