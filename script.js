const arrayNums = [];



const add = function([...arrayNums]) {
	
    let addNums = arrayNums.reduce((total, currentItem) => {

        return total + currentItem;

    });
    return addNums;
    
};


const subtract = function([...arrayNums]) {
	let subtractNums = arrayNums.reduce((total, currentItem) => {
        return total - currentItem;
      });
      return subtractNums;
};


const multiply = function([...arrayNums]) {

    let productOfNums = arrayNums.reduce((total, currentItem) => {
      return total * currentItem;
    }, 1); // 1 needs to only be there for multiplication
    return productOfNums;
  
  };

  const divide = function([...arrayNums]) {

    let divideNums = arrayNums.reduce((total, currentItem) => {
      return total / currentItem;
    });
    return divideNums;
  
  };

  /*
console.log(add([2, 4]));
console.log(subtract([2, 4]));
console.log(multiply([2, 4]));
console.log(divide([2, 4]));

*/

// A calculator operation will consist of a number, an operator, and 
// another number. For example, 3 + 5. Create three variables, one for 
// each part of the operation. You’ll use these variables to update
// your display later.

let num1;
let num2;
let operand;
