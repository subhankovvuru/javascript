a=10;
b=20;
// console.log("a++=",a++);
// console.log("value of a after increment",a);

console.log(++a);

const student={
    fullname:"subhan",
    age:20,
    cgpa:8.5,
    ispass:true


};
console.log(student.age)

// conditional statements
// using if-else to write a even and odd code 

let num=prompt("enter a num")
if(num%2==0){
    console.log("even")
}else{
    console.log("odd")
} 

// write a program by using else-if stement

const age=prompt("enter a num")
if(age<18){
    console.log("minor")
}else if(age>60){
    console.log("senior")
}else{
    console.log("middle")
}

//write a program by else if statemt of student marks 

let marks=prompt("enter a number")
if(marks>90){
    console.log("verygoood")
}else if(marks>80){
    console.log("good")
}else if (marks>33){
    console.log("need to develop")
}else{
    console.log("fail")
}

// pratice questions

const prodt=prompt("enter a number")
if(prodt%5==0){
    console.log("mutliple of 5")
}else{
    console.log("not a of multipleof 5")
}


// write a code which can gives grades to the students

const studentmarks=prompt("enter a num")
if(studentmarks>100){
    console.log("A")
}
else if(studentmarks>89){
    console.log("B")
}
else if(studentmarks>69){
    console.log("C")
}
else if(studentmarks>59){
    console.log("D")
}
else{
    console.log("FAIl")
}