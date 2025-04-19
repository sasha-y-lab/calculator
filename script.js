





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


let divideResult;



let numBtns = document.querySelectorAll("#number-btn-box .nums");
let opBtns = document.querySelectorAll("#operator-btn-box button");


let numTarget;


let num1 = "";
let num2 = "";

let currentInput = "";
let operator = "";

let resultDisplayed = false;

numBtns.forEach(numBtn => {


numBtn.addEventListener("click", (e) => {
  numTarget = e.target;

  //reset calcultor if result is there
if (resultDisplayed) {
currentInput = "";
num1 = "";
num2 = "";
operator = "";
resultDisplayed = false;

}

  switch(true) {

    case numTarget.classList.contains('one-btn'):
      console.log('You pressed 1');
      currentInput += "1";
      
      break;
      
     
    case numTarget.classList.contains('two-btn'):
       console.log('You pressed 2');
       currentInput += "2";
       
break;
       
    case numTarget.classList.contains('three-btn'):
    console.log('You pressed 3');
    currentInput += "3";
    
    break;


    case numTarget.classList.contains('four-btn'):
      console.log('You pressed 4');
      currentInput += "4";
break;
      
    
    case numTarget.classList.contains('five-btn'):
       console.log('You pressed 5');
       currentInput += "5";
       break;

       
       
    case numTarget.classList.contains('six-btn'):
    console.log('You pressed 6');
    currentInput += "6";
    break;

    case numTarget.classList.contains('seven-btn'):
      console.log('You pressed 7');
      currentInput += "7";
 break;
    
    case numTarget.classList.contains('eight-btn'):
       console.log('You pressed 8');eightBtn.textContent;
       currentInput += "8";
       break;
       
    case numTarget.classList.contains('nine-btn'):
    console.log('You pressed 9');
    currentInput += "9";
    break;

    case numTarget.classList.contains('zero-btn'):
    console.log('You pressed 0');
    currentInput += "0";
break;

  }    

  updateDisplay(currentInput);

    }); // end of num btn listener
  }); // end of num btn loop

  
  opBtns.forEach(opBtn => {


    opBtn.addEventListener("click", (e) => {
      let opTarget = e.target;
  
  switch(true) {
    case opTarget.classList.contains('divide-btn'):
      console.log('You pressed divide');
      operator = "/";
      
      break;

      case opTarget.classList.contains('multiply-btn'):
      console.log('You pressed multiply');
      operator = "x";
      
      break;

      case opTarget.classList.contains('add-btn'):
        console.log('You pressed add');
        operator = "+";
        
        break;

        case opTarget.classList.contains('subtract-btn'):
      console.log('You pressed subtact');
      operator = "-";
     
      break;

    }
    updateDisplay(operator);
    
  });
}); // end of op btn listener


document.querySelector(".equal-btn").addEventListener("click", () => {
num2 = currentInput;
let result = calculate(num1, operator, num2);

updateDisplay(result);
resultDisplayed = true;
});



 function calculate(a, op, b) {
a = parseFloat(a);
b = parseFloat(b);


switch (op) {
case '/': return b !== 0 ? a / b : 'Error';
case 'x': return a * b;
case '+': return a + b;
case '-': return a - b;
default: return 'Invalid';

}

 };

 //calculate();

 function updateDisplay(value) {

  document.querySelector("#display-box").textContent = value;

 };