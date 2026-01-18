console.log("---------> Welcome to the Training Page! <---------");

/* I-TASK
  Shunday function yozing, u parametridagi array ichida eng kop takrorlangan raqamni topib qaytarsin. 
  MASALAN: majorityElement([1,2,3,4,5,4,3,4]) return 4.
*/

function majorityElement(numList: number[]): number {
  const count: { [key: number]: number } = {};
  let maxCount = 0;
  let maxRepeatedVal = numList[0];

  for (let num of numList) {
    count[num] = (count[num] || 0) + 1;

    if (count[num] > maxCount) {
      maxCount = count[num];
      maxRepeatedVal = num;
    }
  }

  return maxRepeatedVal;
}

const result: number = majorityElement([1, 2, 3, 4, 5, 4, 3, 4]);
console.log(result);

/* H-TASK
    Shunday function tuzing, u integerlardan iborat arrayni argument sifatida qabul qilib, 
    faqat positive qiymatlarni olib string holatda return qilsin. 
    MASALAN: getPositive([1, -4, 2]) return qiladi "12".
*/

// function getPositive(userInput: number[]) {
//   let evenNums: number[] = [];

//   for (let i: number = 0; i < userInput.length; i++) {
//     if (userInput[i] >= 0) {
//       evenNums.push(userInput[i]);
//     }
//   }

//   return evenNums.join("");
// }

// const result = getPositive([1, -4, 2]);
// console.log(result);

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

// // C Task

// Shunday function tuzing, u 2ta string parametr ega bolsin,
//  hamda agar har ikkala string bir hil harflardan iborat bolsa true aks holda false qaytarsin.
//  MASALAN checkContent("mitgroup", "gmtiprou") return qiladi true.

// function checkContent(word1: string, word2: string) {
//   word1 = word1.toLocaleLowerCase();
//   word2 = word2.toLocaleLowerCase();

//   let word1Elems: string[] = [];
//   let word2Elems: string[] = [];

//   for (let i = 0; i < word1.length; i++) {
//     word1Elems.push(word1[i]);
//   }

//   for (let i = 0; i < word2.length; i++) {
//     word2Elems.push(word2[i]);
//   }

//   const word1Sorted = word1Elems.sort().join();
//   const word2Sorted = word2Elems.sort().join();

//   return word1Sorted === word2Sorted;
// }

// const result: boolean = checkContent("mitgroup", "gmtiprou");
// console.log(result);

// const sameWords = (first: string, second: string): boolean => {
//   if (first.length !== second.length) return false;

//   let a = first.split("").sort().join();
//   let b = second.split("").sort().join();

//   return a === b;
// };

// console.log(sameWords("52wba", "2aw5b"));
