// let btn=document.querySelector("button");
// btn.onclick=() =>{
//     console.log("click the multiple times");
// }

// let p=document.querySelector  ("p");
// p.ondblclick=()=>{
//    console.log("double click");
// }

// let div=document.querySelector("div");
// div.onmouseover=()=>{
//     console.log("to movie the mouse")
// }

// Event Listners
// addEventListner(event,callback)
//  removeEventListnet(Event,callback)

let btn=document.querySelector("button");

btn.addEventListener("click",() =>{
    console.log('button is clicked -handler1');
})

const handler2=()=>{
    console.log('button is clicked -handler2');

}
btn.addEventListener("click",handler2);
   

btn.addEventListener("click",() =>{
    console.log('button is clicked -handler3');
})

btn.addEventListener("click",() =>{
    console.log('button is clicked -handler4');
})


btn.removeEventListener("click",handler2);

