
let num1;
let num2;

const arrayNums = [num1, num2];



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

const operand = [add, subtract, multiply, divide];


// Create a new function operate that takes an operator and two numbers 
// and then calls one of the above functions on the numbers.

function operate([...operand]) {


return operand;
    
 
 

};
//operate([add([2, 4])]);
console.log(operate([add([2, 4])])); // prints 6

console.log(operate([subtract([2, 4])])); // -2 // yes works

console.log(operate([multiply([2, 4])])); // 8 // yes works

console.log(operate([divide([2, 4])])); // .5 // yes works
