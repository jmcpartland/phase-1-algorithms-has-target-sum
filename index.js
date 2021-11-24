// function hasTargetSum(myArray, target) {
//   for (let i = 0; i < myArray.length; i++) {
//     for (let j = 1; j < myArray.length; j++) {
//       if (myArray[i] + myArray[j] === target) {
//         // console.log(myArray[i] + myArray[j])
//         return true
//       } 
//     }
//   }
// };




function hasTargetSum(array, target) {
  const numCheck = {};
  for (const number of array) {
    const complement = target - number;
    if (complement in numCheck) return true;
    numCheck[number] = true;
  }
  return false;
};



// function hasTargetSum(array, target) {
//   for (let i = 0; i < array.length; i++) {
//     const complement = target - array[i];
//     for (let j = i + 1; j < array.length; j++) {
//       if (array[j] === complement) return true;
//     }
//   }
//   return false;
// }



/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here

  function (array, target) {
    if the sum of 2 integers in the array = target
      return true
    else
      false
  }
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;



// Create function that takes in an array of integers and a target integer
// check if 2 integers of the array add up to the target integer
// return true if 2 integers add up to the target and return false otherwise