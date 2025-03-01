// crete array
let heroes=["prabhas","ntr","allu arjun","nani","mahesh babu"];
console.log(heroes);
let num=[89,34,4,4,4,4,4,4,78,3,3];
console.log(num);


let arr=["subbu",1,2,3,4,5,"subhan",true,null,undefined];
console.log(arr[2]);

// pratice questions 
//qs1 given an array of items and that items given offer 10% after final array 

let items=[250,645,300,900,50];
let i=0;
for(let val of items){
    console.log(`value of index ${i}=${val}`);
    let offer=val/10;
    items[i]=items[i]-offer;
    console.log(items[i]);
    i++;
}


// Array Methods 

// Push() : add the last element of array
let veg=["tomato","potato","kakara"];
veg.push("beens");
console.log(veg);

// pop()  : to remove the last element of array
let fruits=["apple","banana","dragon fruit"];
fruits.pop();
console.log(fruits);

// tostring : tp convert array to string
let g=["subbu","subhan","iloveu","loveuto"];
console.log(g.toString());

let d=[33,3,3,3,3,3,3,3,3];
console.log(d.toString());

// concat()  : multiples array into one array
let e=[2,4,5,7,8,98,9]
let f=["subhan","subbu","bhaskar"];
let res=e.concat(f);
console.log(res);

// shift() to remove the starting ele of array
let r=["subhan",2,55,true,null];
r.shift()
console.log(r);

// unshift() // to add the starting element of an array
let s=[1,2,"subbu"];
s.unshift("subhan");
console.log(s);

// slice() // strting index,ending index
let j=[1,3,4,5,6,7,8];
console.log(j.slice(0,4));

//splice :chnage origianl array (add,remove,replace)

let arr1=[1,2,3,4,5,6,7];
arr1.slice(2,0,101);
console.log(arr1);