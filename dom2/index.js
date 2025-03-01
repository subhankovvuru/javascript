// // Attributes :- 1.setAttributte(attr,value) 2.getAttribute(Attr)
// // getAttribuute :-ex
// let h1=document.querySelector("h1");
// console.log(h1.getAttribute("class"));

// // setAttribute :-ex-

// let h1=document.querySelector("h1");
// console.log(h1.setAttribute("class","subbu"))

// INsert elements:-
//append()  // adds to the end of the node
// let btn=document.createElement("button");
// btn.innerText="click";
// console.log(btn);

// let h1=document.querySelector("h1");
// h1.append(btn);

//prepend():-add to the start of the node
let btn=document.createElement("button");
btn.innerText="click";
console.log(btn);

let h1=document.querySelector("h1");
h1.prepend(btn);
