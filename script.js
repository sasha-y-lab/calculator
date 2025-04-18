





/*
console.log(add([2, 4]));
console.log(subtract([2, 4]));
console.log(multiply([2, 4]));
console.log(divide([2, 4]));
*/





// Create a new function operate that takes an operator and two numbers 
// and then calls one of the above functions on the numbers.
/*
function operate([...operand]) {

  return operand; 

};
//operate([add([2, 4])]);
//console.log(operate([add([2, 4])])); // prints 6

//console.log(operate([subtract([2, 4])])); // -2 // yes works

//console.log(operate([multiply([2, 4])])); // 8 // yes works

//console.log(operate([divide([2, 4])])); // .5 // yes works

*/

// Create a basic HTML calculator with buttons for each digit and operator (including =).
// There should also be a display for the calculator. 
// add clear button

// create calculator holding box

const container = document.querySelector(".container");

const calculatorBox = document.createElement("div");
calculatorBox.setAttribute("id", "calc-box-main");

const displayBox = document.createElement("div");
displayBox.setAttribute("id", "display-box");
displayBox.textContent = "";

calculatorBox.appendChild(displayBox);

//start operatingSection

const operateSection = document.createElement("div");
operateSection.setAttribute("id", "operate-section");

// start of number box
const numHoldingBox = document.createElement("div");
numHoldingBox.setAttribute("id", "number-btn-box");

const numBtnRow1 = document.createElement("div");
numBtnRow1.setAttribute("id", "numbers-row1");

const sevenBtn = document.createElement("button");
sevenBtn.classList.add("seven-btn", "nums");
sevenBtn.textContent = "7";

numBtnRow1.appendChild(sevenBtn);

const eightBtn = document.createElement("button");
eightBtn.classList.add("eight-btn", "nums");
eightBtn.textContent = "8";

numBtnRow1.appendChild(eightBtn);

const nineBtn = document.createElement("button");
nineBtn.classList.add("nine-btn", "nums");
nineBtn.textContent = "9";

numBtnRow1.appendChild(nineBtn);

numHoldingBox.appendChild(numBtnRow1);

// second row

const numBtnRow2 = document.createElement("div");
numBtnRow2.setAttribute("id", "numbers-row2");

const fourBtn = document.createElement("button");
fourBtn.classList.add("four-btn", "nums");
fourBtn.textContent = "4";

numBtnRow2.appendChild(fourBtn);

const fiveBtn = document.createElement("button");
fiveBtn.classList.add("five-btn", "nums");
fiveBtn.textContent = "5";

numBtnRow2.appendChild(fiveBtn);

const sixBtn = document.createElement("button");
sixBtn.classList.add("six-btn", "nums");
sixBtn.textContent = "6";

numBtnRow2.appendChild(sixBtn);

numHoldingBox.appendChild(numBtnRow2);

// third row

const numBtnRow3 = document.createElement("div");
numBtnRow3.setAttribute("id", "numbers-row3");

const oneBtn = document.createElement("button");
oneBtn.classList.add("one-btn", "nums");
oneBtn.textContent = "1";

numBtnRow3.appendChild(oneBtn);

const twoBtn = document.createElement("button");
twoBtn.classList.add("two-btn", "nums");
twoBtn.textContent = "2";

numBtnRow3.appendChild(twoBtn);

const threeBtn = document.createElement("button");
threeBtn.classList.add("three-btn", "nums");
threeBtn.textContent = "3";

numBtnRow3.appendChild(threeBtn);

numHoldingBox.appendChild(numBtnRow3);



// row 4

const numBtnRow4 = document.createElement("div");
numBtnRow4.setAttribute("id", "numbers-row4");

const zeroBtn = document.createElement("button");
zeroBtn.classList.add("zero-btn", "nums");
zeroBtn.textContent = "0";

numBtnRow4.appendChild(zeroBtn);

const equalsBtn = document.createElement("button");
equalsBtn.classList.add("equal-btn");
equalsBtn.textContent = "=";

numBtnRow4.appendChild(equalsBtn);

numHoldingBox.appendChild(numBtnRow4);

operateSection.appendChild(numHoldingBox);

// operator box start
const operatorHoldingBox = document.createElement("div");
operatorHoldingBox.setAttribute("id", "operator-btn-box");

const divideBtn = document.createElement("button");
divideBtn.classList.add("divide-btn");
divideBtn.textContent = "/";

operatorHoldingBox.appendChild(divideBtn);

const multiplyBtn = document.createElement("button");
multiplyBtn.classList.add("multiply-btn");
multiplyBtn.textContent = "x";

operatorHoldingBox.appendChild(multiplyBtn);


const subtractBtn = document.createElement("button");
subtractBtn.classList.add("subtract-btn");
subtractBtn.textContent = "-";

operatorHoldingBox.appendChild(subtractBtn);

const addBtn = document.createElement("button");
addBtn.classList.add("add-btn");
addBtn.textContent = "+";

operatorHoldingBox.appendChild(addBtn);

operateSection.appendChild(operatorHoldingBox);

calculatorBox.appendChild(operateSection);

// clear button start

const otherBtnsSection = document.createElement("div");
otherBtnsSection.setAttribute("id", "other-section");

const clearBtn = document.createElement("button");
clearBtn.classList.add("clear-btn");
clearBtn.textContent = "Clear";


otherBtnsSection.appendChild(clearBtn);

calculatorBox.appendChild(otherBtnsSection);

container.appendChild(calculatorBox);


// Create the functions that populate the display when you click the 
// digit buttons. You should store the content of the display (the number)
// in a variable for use in the next step.

let num1;
let num2;



let numBtns = document.querySelectorAll("#number-btn-box .nums");
let opBtns = document.querySelectorAll("#operator-btn-box button");
let updateNumDisplay;


function pressNum() {



//console.log(numBtns); // all numbered buttons

numBtns.forEach(numBtn => {

numBtn.addEventListener("click", (e) => {
  num1 = numBtn;
   // console.log(num1); is number pressed
  let num1Txt = num1.textContent;
  parseInt(num1Txt);
  
    if (displayBox.textContent = "") {
   
  updateNumDisplay = displayBox.textContent = num1Txt;
 // console.log(updateNumDisplay);
  return updateNumDisplay;
    } else {
      if (displayBox.textContent = num1Txt) {
        opBtns.forEach(opBtn => {
        opBtn.addEventListener("click", (e) => {
        updateNumDisplay = displayBox.textContent = num1.textContent + opBtn.textContent;
        console.log(updateNumDisplay);
        numBtn.addEventListener("click", (e) => {
          num2 = numBtn;
          let num2Txt = num2.textContent;
          parseInt(num2Txt);
          updateNumDisplay = displayBox.textContent = num1.textContent + opBtn.textContent + num2Txt;
          console.log(updateNumDisplay);
          //return updateNumDisplay;

          let getDisplay = document.getElementById("display-box");
equalsBtn.addEventListener ("click", (e) => {


          if (getDisplay.textContent.includes('+')) {
            console.log(add());
           return add();
          }

        }); // end of equal btn listener

        }); // end of num btn listener
       // console.log(updateNumDisplay);
        //return updateNumDisplay; // this returns only num1 + op no num2
        
        }); // end of ops btn listener
       // console.log(updateNumDisplay);
       // return updateNumDisplay; this is undefined which is out of scope
       
      }); // end of op btn for each
      
      } // end of if
    
    } // end of else
   
}); // event listener end

//console.log(updateNumDisplay); // not defined here so out of scope

}); // for each loop end

return numBtns;


};

pressNum();
//let numbersPressed = pressNum();
// console.log(pressNum()); returns all numbered buttons


// Make the calculator work! You’ll need to store the first and second numbers 
// input by the user and then operate() on them when the user presses the = button, 
// according to the operator that was selected between the numbers.

// You should already have the code that can populate the display, so once operate
// has been called, update the display with the result of the operation.

// store all the values and call the operate function with them.


//const arrayNums = [num1Txt, num2Txt];
// start calculation functions here
/*
const add = function([...arrayNums]) {
	addBtn.textContent;
  //console.log(addBtn.textContent); shows
  let addNums = arrayNums.reduce((number, currentNum) => {

      return number + currentNum;

  });
  return addNums;
  
};


const subtract = function([...arrayNums]) {
subtractBtn.textContent;
let subtractNums = arrayNums.reduce((number, currentNum) => {
      return number - currentNum;
    });
    return subtractNums;
};


const multiply = function([...arrayNums]) {
multiplyBtn.textContent;
  let productOfNums = arrayNums.reduce((number, currentNum) => {
    return number * currentNum;
  }, 1); // 1 needs to only be there for multiplication
  return productOfNums;

};

const divide = function([...arrayNums]) {
divideBtn.textContent;
  let divideNums = arrayNums.reduce((number, currentNum) => {
    return number / currentNum;
  });
  return divideNums;

};
*/

/*
console.log(add([num1, num2]));

console.log(add([2, 4]));
console.log(subtract([2, 4]));
console.log(multiply([2, 4]));
console.log(divide([2, 4]));
*/




//const operand = [add, subtract, multiply, divide]; 
//console.log(operand);
// start operate here
/*
function operate() {

  equalsBtn.addEventListener("click", (e) => {
    
    
  
  });
  
  
  };

  operate();
*/

const add = function() {
 // console.log(num1.textContent);
 // console.log(num2.textContent);
 // console.log(parseInt(num1.textContent));
 // console.log(parseInt(num2.textContent));
  return parseInt(num1.textContent) + parseInt(num2.textContent);
};

/*
  function calculate() {
      
let getDisplay = document.getElementById("display-box");

//console.log(getDisplay);

console.log(getDisplay.textContent.includes('+'));



    if (getDisplay.textContent.includes('+')) {
      console.log(add);
     add;
    } else {
      return;
    }
    
    return add;

  };
  calculate();

  */