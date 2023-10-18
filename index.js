//1//

//let numbers = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];

// numbers.sort((a,b) => a-b);

// console.log(numbers);


//2//

//function union(arr1, arr2) {
//     const combinedArray = arr1.concat(arr2);
//     return combinedArray;
// }
  
// const result = union([1, 2, 3], [100, 2, 1, 10]);
  
// console.log(result);


//3//

// const arr =  [NaN, 0, 15, false, -22, '',undefined, 47, null];

// const result = arr.filter(element => typeof element === 'number' && !isNaN(element) && element !== 0);
// const result = arr.filter(Boolean);

// console.log(result)


//4//

// var library = [ 
//     { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
//     { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
//     { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
//     ];
 
//  function sort(x,y) 
//   {
//    if (x.title < y.title){
//     return -1;
//    }
//    if (x.title > y.title){
//     return 1;
//    }
//    return 0;
//   }

//   let res = library.sort(sort);
 
//  console.log(res);

//5//

// let numbers = [2, 4, 8, 16, 32];

// console.log(factorChain(numbers));

// function factorChain(numbers){
//     for(var i = 0; i < numbers.length-1 ; i++){
//         if(numbers[i+1] != numbers[i]*2){
//             return false;
//         }
//     }   
//     return true;
// }

