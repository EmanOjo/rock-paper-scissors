const acceptableVariants = {
    rock: ["rock", "Rock", "r", "R"],
    paper: ["paper", "Paper", "p", "P"],
    scissors: ["scissors", "Scissors", "s", "S"],
  };
  
  function asStandardChoice(inputStr) {
    /** An nested array: array of array of strings */
    const arrayOfVariantArrays = Object.keys(acceptableVariants);
    console.log(arrayOfVariantArrays)
    // // alternative `for ... of ...` loop syntax - great for arrays
    // for (let variantArray of arrayOfVariantArrays) {
    //   if (variantArray.includes(inputStr)) {
    //     return variantArray[0];
    //   }
    // }
  }

  asStandardChoice('rock')