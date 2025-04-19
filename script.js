





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
let num2Target;

let num1;
let num2;

numBtns.forEach(numBtn => {


numBtn.addEventListener("click", (e) => {
  numTarget = e.target;
  num1 = numTarget;

  switch(true) {

    case numTarget.classList.contains('one-btn'):
      console.log('You pressed 1');
      displayBox.textContent = oneBtn.textContent;
      
      opBtns.forEach(opBtn => {


        opBtn.addEventListener("click", (e) => {
          let opTarget = e.target;
      
      switch(true) {
        case opTarget.classList.contains('divide-btn'):
          console.log('You pressed divide');
          displayBox.textContent = oneBtn.textContent + divideBtn.textContent;

          let numBtns2 = document.querySelectorAll(".nums");

          console.log(numBtns2);

          numBtns2.forEach(numBtn2 => {

            numBtn2.addEventListener("click", (e) => {
              num2Target = e.target;
      
          
              num2 = num2Target;

              switch(true) {
                case num2Target.classList.contains('one-btn'):

                
                  console.log('You pressed 1');
                  displayBox.textContent = oneBtn.textContent + divideBtn.textContent + oneBtn.textContent;

                  equalsBtn.addEventListener("click", (e) => {

                  
                  divide();
                  divideResult = divide();
                  console.log(divideResult);
                  displayBox.textContent = divideResult;

                });
                  break;

                  case num2Target.classList.contains('two-btn'):
       console.log('You pressed 2');
       displayBox.textContent = oneBtn.textContent + divideBtn.textContent + twoBtn.textContent;
       equalsBtn.addEventListener("click", (e) => {

                  
        divide();
        divideResult = divide();
        console.log(divideResult);
        displayBox.textContent = divideResult;

      });

                  break;

                  case num2Target.classList.contains('three-btn'):
    console.log('You pressed 3');
    displayBox.textContent = oneBtn.textContent + divideBtn.textContent + threeBtn.textContent;
    
    equalsBtn.addEventListener("click", (e) => {

                  
      divide();
      divideResult = divide();
      console.log(divideResult);
      displayBox.textContent = divideResult;

    });

    break;

    case num2Target.classList.contains('four-btn'):
      console.log('You pressed 4');
      displayBox.textContent = oneBtn.textContent + divideBtn.textContent + fourBtn.textContent;
     
      equalsBtn.addEventListener("click", (e) => {

                  
        divide();
        divideResult = divide();
        console.log(divideResult);
        displayBox.textContent = divideResult;

      });

      break;

      case num2Target.classList.contains('five-btn'):
        console.log('You pressed 5');
        displayBox.textContent = oneBtn.textContent + divideBtn.textContent + fiveBtn.textContent;
       
        equalsBtn.addEventListener("click", (e) => {

                  
          divide();
          divideResult = divide();
          console.log(divideResult);
          displayBox.textContent = divideResult;

        });

        break;

        case num2Target.classList.contains('six-btn'):
    console.log('You pressed 6');
    displayBox.textContent = oneBtn.textContent + divideBtn.textContent + sixBtn.textContent;

    equalsBtn.addEventListener("click", (e) => {

                  
      divide();
      divideResult = divide();
      console.log(divideResult);
      displayBox.textContent = divideResult;

    });

    break;

    case num2Target.classList.contains('seven-btn'):
    console.log('You pressed 7');
    displayBox.textContent = oneBtn.textContent + divideBtn.textContent + sevenBtn.textContent;
    
    equalsBtn.addEventListener("click", (e) => {

                  
      divide();
      divideResult = divide();
      console.log(divideResult);
      displayBox.textContent = divideResult;

    });

    break;

    case num2Target.classList.contains('eight-btn'):
    console.log('You pressed 8');
    displayBox.textContent = oneBtn.textContent + divideBtn.textContent + eightBtn.textContent;
    
    equalsBtn.addEventListener("click", (e) => {

                  
      divide();
      divideResult = divide();
      console.log(divideResult);
      displayBox.textContent = divideResult;

    });

    break;

    case num2Target.classList.contains('nine-btn'):
    console.log('You pressed 9');
    displayBox.textContent = oneBtn.textContent + divideBtn.textContent + nineBtn.textContent;

    equalsBtn.addEventListener("click", (e) => {

                  
      divide();
      divideResult = divide();
      console.log(divideResult);
      displayBox.textContent = divideResult;

    });

    break;

    case num2Target.classList.contains('zero-btn'):
    console.log('You pressed 0');
    displayBox.textContent = oneBtn.textContent + divideBtn.textContent + zeroBtn.textContent;
    
    equalsBtn.addEventListener("click", (e) => {

                  
      divide();
      divideResult = divide();
      console.log(divideResult);
      displayBox.textContent = divideResult;
    
    });
 
          break;
  

          case opTarget.classList.contains('multiply-btn'):
          console.log('You pressed multiply');
          displayBox.textContent = oneBtn.textContent + multiplyBtn.textContent;
          break;

          case opTarget.classList.contains('add-btn'):
            console.log('You pressed add');
            displayBox.textContent = oneBtn.textContent + addBtn.textContent;
            break;

            case opTarget.classList.contains('subtract-btn'):
          console.log('You pressed subtact');
          displayBox.textContent = oneBtn.textContent + subtractBtn.textContent;
          break;
  }          
    

      }); // end of op btn listener
    }); // end of op btn loop

              break;
    
    case numTarget.classList.contains('two-btn'):
       console.log('You pressed 2');
       displayBox.textContent = twoBtn.textContent;

       opBtns.forEach(opBtn => {


        opBtn.addEventListener("click", (e) => {
          let opTarget = e.target;
      
      switch(true) {
        case opTarget.classList.contains('divide-btn'):
          console.log('You pressed divide');
          displayBox.textContent = twoBtn.textContent + divideBtn.textContent;
          break;

          case opTarget.classList.contains('multiply-btn'):
          console.log('You pressed multiply');
          displayBox.textContent = twoBtn.textContent + multiplyBtn.textContent;
          break;

          case opTarget.classList.contains('add-btn'):
            console.log('You pressed add');
            displayBox.textContent = twoBtn.textContent + addBtn.textContent;
            break;

            case opTarget.classList.contains('subtract-btn'):
          console.log('You pressed subtact');
          displayBox.textContent = twoBtn.textContent + subtractBtn.textContent;
          break;

        }

      }); // end of op btn listener
    }); // end of op btn loop

       break;
       
    case numTarget.classList.contains('three-btn'):
    console.log('You pressed 3');

    displayBox.textContent = threeBtn.textContent;

    opBtns.forEach(opBtn => {


      opBtn.addEventListener("click", (e) => {
        let opTarget = e.target;
    
    switch(true) {
      case opTarget.classList.contains('divide-btn'):
        console.log('You pressed divide');
        displayBox.textContent = threeBtn.textContent + divideBtn.textContent;
        break;

        case opTarget.classList.contains('multiply-btn'):
        console.log('You pressed multiply');
        displayBox.textContent = threeBtn.textContent + multiplyBtn.textContent;
        break;

        case opTarget.classList.contains('add-btn'):
          console.log('You pressed add');
          displayBox.textContent = threeBtn.textContent + addBtn.textContent;
          break;

          case opTarget.classList.contains('subtract-btn'):
        console.log('You pressed subtact');
        displayBox.textContent = threeBtn.textContent + subtractBtn.textContent;
        break;

      }

    }); // end of op btn listener
  }); // end of op btn loop

    break;

    case numTarget.classList.contains('four-btn'):
      console.log('You pressed 4');
      displayBox.textContent = fourBtn.textContent;

      opBtns.forEach(opBtn => {


        opBtn.addEventListener("click", (e) => {
          let opTarget = e.target;
      
      switch(true) {
        case opTarget.classList.contains('divide-btn'):
          console.log('You pressed divide');
          displayBox.textContent = fourBtn.textContent + divideBtn.textContent;
          break;

          case opTarget.classList.contains('multiply-btn'):
          console.log('You pressed multiply');
          displayBox.textContent = fourBtn.textContent + multiplyBtn.textContent;
          break;

          case opTarget.classList.contains('add-btn'):
            console.log('You pressed add');
            displayBox.textContent = fourBtn.textContent + addBtn.textContent;
            break;

            case opTarget.classList.contains('subtract-btn'):
          console.log('You pressed subtact');
          displayBox.textContent = fourBtn.textContent + subtractBtn.textContent;
          break;

        }

      }); // end of op btn listener
    }); // end of op btn loop

              break;
    
    case numTarget.classList.contains('five-btn'):
       console.log('You pressed 5');
       displayBox.textContent = fiveBtn.textContent;

       opBtns.forEach(opBtn => {


        opBtn.addEventListener("click", (e) => {
          let opTarget = e.target;
      
      switch(true) {
        case opTarget.classList.contains('divide-btn'):
          console.log('You pressed divide');
          displayBox.textContent = fiveBtn.textContent + divideBtn.textContent;
          break;

          case opTarget.classList.contains('multiply-btn'):
          console.log('You pressed multiply');
          displayBox.textContent = fiveBtn.textContent + multiplyBtn.textContent;
          break;

          case opTarget.classList.contains('add-btn'):
            console.log('You pressed add');
            displayBox.textContent = fiveBtn.textContent + addBtn.textContent;
            break;

            case opTarget.classList.contains('subtract-btn'):
          console.log('You pressed subtact');
          displayBox.textContent = fiveBtn.textContent + subtractBtn.textContent;
          break;

        }

      }); // end of op btn listener
    }); // end of op btn loop

       break;
       
    case numTarget.classList.contains('six-btn'):
    console.log('You pressed 6');
    displayBox.textContent = sixBtn.textContent;

    opBtns.forEach(opBtn => {


      opBtn.addEventListener("click", (e) => {
        let opTarget = e.target;
    
    switch(true) {
      case opTarget.classList.contains('divide-btn'):
        console.log('You pressed divide');
        displayBox.textContent = sixBtn.textContent + divideBtn.textContent;
        break;

        case opTarget.classList.contains('multiply-btn'):
        console.log('You pressed multiply');
        displayBox.textContent = sixBtn.textContent + multiplyBtn.textContent;
        break;

        case opTarget.classList.contains('add-btn'):
          console.log('You pressed add');
          displayBox.textContent = sixBtn.textContent + addBtn.textContent;
          break;

          case opTarget.classList.contains('subtract-btn'):
        console.log('You pressed subtact');
        displayBox.textContent = sixBtn.textContent + subtractBtn.textContent;
        break;

      }

    }); // end of op btn listener
  }); // end of op btn loop

    break;

    case numTarget.classList.contains('seven-btn'):
      console.log('You pressed 7');
      displayBox.textContent = sevenBtn.textContent;

      opBtns.forEach(opBtn => {


        opBtn.addEventListener("click", (e) => {
          let opTarget = e.target;
      
      switch(true) {
        case opTarget.classList.contains('divide-btn'):
          console.log('You pressed divide');
          displayBox.textContent = sevenBtn.textContent + divideBtn.textContent;
          break;

          case opTarget.classList.contains('multiply-btn'):
          console.log('You pressed multiply');
          displayBox.textContent = sevenBtn.textContent + multiplyBtn.textContent;
          break;

          case opTarget.classList.contains('add-btn'):
            console.log('You pressed add');
            displayBox.textContent = sevenBtn.textContent + addBtn.textContent;
            break;

            case opTarget.classList.contains('subtract-btn'):
          console.log('You pressed subtact');
          displayBox.textContent = sevenBtn.textContent + subtractBtn.textContent;
          break;

        }

      }); // end of op btn listener
    }); // end of op btn loop

              break;
    
    case numTarget.classList.contains('eight-btn'):
       console.log('You pressed 8');eightBtn.textContent;

       opBtns.forEach(opBtn => {


        opBtn.addEventListener("click", (e) => {
          let opTarget = e.target;
      
      switch(true) {
        case opTarget.classList.contains('divide-btn'):
          console.log('You pressed divide');
          displayBox.textContent = eightBtn.textContent + divideBtn.textContent;
          break;

          case opTarget.classList.contains('multiply-btn'):
          console.log('You pressed multiply');
          displayBox.textContent = eightBtn.textContent + multiplyBtn.textContent;
          break;

          case opTarget.classList.contains('add-btn'):
            console.log('You pressed add');
            displayBox.textContent = eightBtn.textContent + addBtn.textContent;
            break;

            case opTarget.classList.contains('subtract-btn'):
          console.log('You pressed subtact');
          displayBox.textContent = eightBtn.textContent + subtractBtn.textContent;
          break;

        }

      }); // end of op btn listener
    }); // end of op btn loop

       break;
       
    case numTarget.classList.contains('nine-btn'):
    console.log('You pressed 9');
    displayBox.textContent = nineBtn.textContent;

    opBtns.forEach(opBtn => {


      opBtn.addEventListener("click", (e) => {
        let opTarget = e.target;
    
    switch(true) {
      case opTarget.classList.contains('divide-btn'):
        console.log('You pressed divide');
        displayBox.textContent = nineBtn.textContent + divideBtn.textContent;
        break;

        case opTarget.classList.contains('multiply-btn'):
        console.log('You pressed multiply');
        displayBox.textContent = nineBtn.textContent + multiplyBtn.textContent;
        break;

        case opTarget.classList.contains('add-btn'):
          console.log('You pressed add');
          displayBox.textContent = nineBtn.textContent + addBtn.textContent;
          break;

          case opTarget.classList.contains('subtract-btn'):
        console.log('You pressed subtact');
        displayBox.textContent = nineBtn.textContent + subtractBtn.textContent;
        break;

      }

    }); // end of op btn listener
  }); // end of op btn loop

    break;

    case numTarget.classList.contains('zero-btn'):
    console.log('You pressed 0');
    displayBox.textContent = zeroBtn.textContent;

    opBtns.forEach(opBtn => {


      opBtn.addEventListener("click", (e) => {
        let opTarget = e.target;
    
    switch(true) {
      case opTarget.classList.contains('divide-btn'):
        console.log('You pressed divide');
        displayBox.textContent = zeroBtn.textContent + divideBtn.textContent;
        break;

        case opTarget.classList.contains('multiply-btn'):
        console.log('You pressed multiply');
        displayBox.textContent = zeroBtn.textContent + multiplyBtn.textContent;
        break;

        case opTarget.classList.contains('add-btn'):
          console.log('You pressed add');
          displayBox.textContent = zeroBtn.textContent + addBtn.textContent;
          break;

          case opTarget.classList.contains('subtract-btn'):
        console.log('You pressed subtact');
        displayBox.textContent = zeroBtn.textContent + subtractBtn.textContent;
        break;

    

      }

    

    }); // end of op btn listener
  }); // end of op btn loop

    break;
      

}


        });
    

});
  }

});

}); // end of num btn loop




const add = function() {
   return parseInt(num1.textContent) + parseInt(num2.textContent); 
 };
 
 const subtract = function() {
    return parseInt(num1.textContent) - parseInt(num2.textContent);
  };
 
  const multiply = function() {
   return parseInt(num1.textContent) * parseInt(num2.textContent); 
 };
 
 const divide = function() {
  console.log(num1);
  console.log(num2);
   return parseInt(num1.textContent) / parseInt(num2.textContent);
 };