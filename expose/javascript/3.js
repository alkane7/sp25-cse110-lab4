// Arithmetic  算术
// '3' + 2
// '3' - 2
// 3 + null
// '3' + null
// true + 3
// false + null
// '3' + undefined
// '3' - undefined

// console.log('3' + 2); // '32'
// console.log('3' - 2); // 1
// console.log(3 + null); // 3
// console.log('3' + null); // '3null'
// console.log(true + 3); // 4
// console.log(false + null); // 0
// console.log('3' + undefined); // '3undefined'
// console.log('3' - undefined); // NaN


// Comparison  比较
// '2' > 1
// '2' < '12'
// 2 == '2'
// 2 === '2'
// true == 2
// true === Boolean(2)

// console.log('2' > 1); // true
// console.log('2' < '12'); // false
// console.log(2 == '2'); // true
// console.log(2 === '2'); // false
// console.log(true == 2); // true
// console.log(true === Boolean(2)); // true


// let statistics = {
//     redCars: 21,
//     blueCars: 45,
//     greenCars: 12,
//     raceCars: 5,
//     blackCars: 40,
//     rareCars: 2
//   };
  
//   for (let property in statistics) {
//     if (property.startsWith('r') || statistics[property] % 2 !== 0) {
//       console.log(statistics[property]);
//     }
//   }
  

// function modifyArray(array, callback) {
//     const newArr = [];
//     for (let i = 0; i < array.length; i++) {
//       newArr.push(callback(array[i]));
//     }
//     return newArr;
//   }
  
//   function doSomething(num) {
//     return num * 2;
//   }
  
//   console.log(modifyArray([1, 2, 3], doSomething));

function printNums() {
    console.log(1);
  
    setTimeout(function() {
      console.log(2);
    }, 1000);
  
    setTimeout(function() {
      console.log(3);
    }, 0);
  
    console.log(4);
  }
  
  printNums();
  
  