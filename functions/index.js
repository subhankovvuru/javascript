// // function
// // function definntion(syntax)

// // function fuctionName(){
//    // do some work
// //}


// function hi(){
//     console.log("subhan");
// }
// hi();

// //using function 2 number ki sum kanukovali
//  function sum(a,b){
//      s=a+b;
//     console.log(a);
//     console.log(b);
//     console.log(s)
//     return s;
//  }
//  sum(10,20);
//  console.log(s)

//  // arrow function
//  const functionName = (a,b) =>{
//    console.log(a+b);
//  }

//  // Function Methods
//  // forEach() : to excute the each and every element in the array

//  const arr=["subhan",1,4,8,"subbu"]
//  arr.forEach((x) =>{
//     console.log(x);

//  })
// const arr1=["subhan","subbu","bhaskar"];
// arr1.forEach((val) =>{
//    console.log(val);
// })

// // qs1 for a given array of numbers ,print the square of each value using for each loop

// const numbs=[1,2,3,4,5,6];
// numbs.forEach((numbs)=>{
//    console.log(numbs*numbs)
// })

// // Map() 

// let arr2=[1,2,3,4,4];
// arr2.map((val)=>{
//    console.log(arr2);
// });



// let arr3=[1,2,3,4,4];
// let newarr3=arr3.map((val)=>{
//    return val;
// });
// console.log(newarr3);


// // filter()
// let arr=["subhan","subbu","Bhaskar"];
// arr.filter((val)=>{
//    console.log(val=="subhan")
// })


// given array using filter to print even numbers

// let arr=[1,2,3,4,5,6,7,8,9];
// let evenarr=arr.filter((val)=>{
//   return val%2==0;
// })
// console.log(evenarr)



// //given array using filter to print odd numbers

// let arr=[1,2,3,4,5,6,7,8,9];
// let evenarr=arr.filter((val)=>{
//   return !(val%2==0);
// })
// console.log(evenarr)


// let arr=[1,2,3,4,5,6,7,8,9];
// let evenarr=arr.filter((val)=>{
//   return val<8;
// })
// console.log(evenarr)

// // reduce()

// let arr=[1,2,3,5,6,7,8];
// let output=arr.reduce((res,curr) => {
//    return res+curr;
// })
// console.log(output) // output=32

// let arr1=[1,33,4,5,6,6,7,7];
// const res=arr1.reduce((pre,cur) =>{
//    return pre+cur;
// })
// console.log(res)

// greater value and less by change  < than and > than symbols


let arr1=[1,33,4,5,6,6,7,7];
const res=arr1.reduce((pre,cur) =>{
   return pre<cur ? pre:cur;
})
console.log(res)

// Qs1 given array of amrks of students.filter out the marks of student get 90+

let student=[55,98,99,90,86,76,65];
const output=student.filter((val) =>{
   return val>90;
})
console.log(output);

//Qs2

let n=prompt("enter a number");
let arr=[];
for(i=1;i<=n;i++){
   arr[i-1]=i;
}
const opt=arr.reduce((pre,cur) =>{
   return pre+cur;
})
console.log(opt);