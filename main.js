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
//changed list to log as we should be finished with it for now
function logAllItems(products) {
    for (let i = 0; i < products.length; i++) {
      const itemForSale = products[i];
  
      console.log(`Name ${i + 1}:${itemForSale.name}`); // item num and name
      console.log(`Price: $${(itemForSale.priceInCents / 100).toFixed(2)}`); // price in dollars
    //   console.log(`Available Sizes: ${itemForSale.availableSizes}`); removed after confirming all sizes are available
      
      const availableSizes = itemForSale.availableSizes;
      const firstSize = availableSizes[0];
      const lastSize = availableSizes[availableSizes.length - 1];
            // declaring first and last size to show size range
      console.log(`Available Sizes: Sizes ${firstSize}-${lastSize} are all available!`);
            //
 
    }
  }
  
  function listAllItems(products) {
    const itemCount = products.length;
// if no items say no
    if (!Array.isArray(products) || products.length === 0) {
        return "No items are available."
    }
    const itemNames = products.map((product) => product.name);
// if one item say 1 item for sale
    if (itemCount === 1) {
        return `There is 1 item for sale: ${itemNames[0]}`
    }
    // but if not either condition (not zero, and more than 1) then print all items for sale.
    const lastItem = itemNames[itemCount - 1];
    const remainingItems = itemNames.slice(0, itemCount - 1).join(", ");

    return `There are ${itemCount} items for sale: ${remainingItems}, and ${lastItem}.`;


  }

  const exampleArray = [
    { name: "Slip Dress", priceInCents: 3400, availableSizes: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50] },
    { name: "Nonslip Dress", priceInCents: 1800, availableSizes: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50] },
    { name: "Cool Dress", priceInCents: 6000, availableSizes: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50] },
    { name: "Hot Dress", priceInCents: 8000, availableSizes: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50] },
    { name: "Elegant Gown", priceInCents: 12000, availableSizes: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50] },
    { name: "Maxi Dress", priceInCents: 7500, availableSizes: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50] },
    { name: "Sundress", priceInCents: 5500, availableSizes: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50] },
    { name: "Casual Dress", priceInCents: 3500, availableSizes: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50] }
  ]
  //just normal dresses everyone wears, now with a bunch of different sizes

  const products = [
    { name: "Slip Dress", priceInCents: 3400, availableSizes: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50] },
    { name: "Nonslip Dress", priceInCents: 1800, availableSizes: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50] },
    { name: "Cool Dress", priceInCents: 6000, availableSizes: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50] },
  ]
  const workingArray = [
    { name: "Slip Dress", priceInCents: 3400, availableSizes: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50] },
  ]
  const emptyArray = []

    module.exports = {
    listAllItems,
  };

  const resultEmpty = listAllItems(emptyArray);
  console.log('Test for none' + ': ' + resultEmpty);

  const resultOne = listAllItems(workingArray);
  console.log('Test for one' + ': ' + resultOne);

  const resultMore = listAllItems(products);
  console.log('Test for more than one' + ': ' + resultMore);

  const resultAll = listAllItems(exampleArray);
  console.log('Test for ALL items' + ': ' + resultAll);