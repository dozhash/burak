console.log("---------> Welcome to the Training Page! <---------");

/* H-TASK
    Shunday function tuzing, u integerlardan iborat arrayni argument sifatida qabul qilib, 
    faqat positive qiymatlarni olib string holatda return qilsin. 
    MASALAN: getPositive([1, -4, 2]) return qiladi "12".
*/

function getPositive(userInput: number[]) {
  let evenNums: number[] = [];

  for (let i: number = 0; i < userInput.length; i++) {
    if (userInput[i] >= 0) {
      evenNums.push(userInput[i]);
    }
  }

  return evenNums.join("");
}

const result = getPositive([1, -4, 2]);
console.log(result);

/* G-TASK
    Shunday function tuzingki unga integerlardan iborat array pass bolsin va 
    function bizga osha arrayning eng katta qiymatiga tegishli birinchi indexni qaytarsin. 
    MASALAN: getHighestIndex([5, 21, 12, 21, 8]) return qiladi 1 sonini.
*/

// function largestNumIndex(inputArray) {
//   let greatestNum = inputArray[0];
//   let index = 0;

//   for (let i = 1; i < inputArray.length; i++) {
//     if (inputArray[i] > greatestNum) {
//       greatestNum = inputArray[i];
//       index = i;
//     }
//   }

//   return index;
// }

// const result = largestNumIndex([5, 21, 12, 21, 8]);
// console.log(result);
