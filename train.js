const { log } = require("console");

console.log("---------> Welcome to the Training Page! <---------");

/* G-TASK
    Shunday function tuzingki unga integerlardan iborat array pass bolsin va 
    function bizga osha arrayning eng katta qiymatiga tegishli birinchi indexni qaytarsin. 
    MASALAN: getHighestIndex([5, 21, 12, 21, 8]) return qiladi 1 sonini.
*/

function largestNumIndex(inputArray) {
  let greatestNum = inputArray[0];
  let index = 0;

  for (let i = 1; i < inputArray.length; i++) {
    if (inputArray[i] > greatestNum) {
      greatestNum = inputArray[i];
      index = i;
    }
  }

  return index;
}

const result = largestNumIndex([5, 21, 12, 21, 8]);
console.log(result);
