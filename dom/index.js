// // dom part1

// // these are the parts of windpow
// // console.log("hello")
// // window.console.log("hello1");
// // window.alert("hello2");
// // window.prompt("hello3");

// let subbu=document.getElementById("subbu");

// let subhan=document.getElementById("newid");
// subbu.style.color="red";
// subhan.style.backgroundColor="green"
// subbu.innerHTML=`
// <p>p tag<\p>
// <img href="" >
// <h1>h1 tag<\h1>
// `
// subbu.textContent="hello"
// subbu.innerText="hiiiii"


// // queryselectorall

// let p=document.querySelectorAll("p");
// p[0].style.color="red"
// p[0].innerHTML=`
// <p>subhan</p>
// <h1>subbu</h1>
// <img src="https://pixlr.com/images/generator/how-to-generate.webp" width=100px>
// `
// p[1].style.color="green"
// p[2].style.color="blue"
// p[3].style.color="brown"
// p[4].style.color="yellow"
// p[5].style.color="orange"





// let p=document.querySelector(".p");
// p.style.color="red"
// p.innerHTML=`
// <p>subhan</p>
// <h1>subbu</h1>
// <img src="https://pixlr.com/images/generator/how-to-generate.webp" width=100px>
// `
// p.style.color="green"
// p.style.color="blue"
// p.style.color="brown"
// p.style.color="yellow"
// p.style.color="orange"


// // document.getelementbyclassname();



// let div=document.getElementsByClassName("div");
// div[0].style.backgroundColor="red"

// // document.getElementByTagName()

// let p=document.getElementsByTagName("p")
// p[0].style.backgroundColor="blue"

// // Events

// // let div = document.getElementById("div")

// // div.addEventListener("click",()=>{
// //     console.log("div is clicked");
    
// // })

// // document.getElementById 
// // ex:- only a unique id should taken

// let p=document.getElementById("p");
// p.style.backgroundColor="red";
// p.innerText="hello!";
// p.textContent="hi ra"; // by using this p tag text content sholud change
// p.innerHTML=`
// <p>subhan</p>
// <h1>subbu</h1>
// <img src="https://i.pinimg.com/236x/14/c6/b3/14c6b3f2ae432a9be389318ff00a7dc6.jpg" width=250px/>
// `



//  //queryselectorAll() and queryselector()
// //examples:-

// const p=document.querySelector(".ptag"); // class name given
// p.style.backgroundColor="red";
// p.textContent="iron man"
// p.innerHTML=`
// <h1>king</h1>`

// //queryselectorAll():- it can acces all elements beacuse here using classname(.class) same and not acces of id(#id) by given mutiple
// //it can access by index seen blow example

// const p=document.querySelectorAll(".ptag"); // class name given
// p[0].style.backgroundColor="skyblue";
// p[0].textContent="lord shiva"
// p[0].innerHTML=`
// <img src="https://www.bhaktiwallpapers.com/uploads/2024/01/hindu-god-shiva-angry-pashupatinatha-mobile-meditation-god-of-destruction-lord-shiva-family-hd-phone-wallpaper-ajld-1706349671.jpg" width=300px/>
// // <h1>Lord Shiva</h1>`
// p[1].style.backgroundColor="green";
// p[1].innerHTML=`
// <img src="https://www.bhaktiwallpapers.com/uploads/2024/01/hindu-god-shiva-angry-pashupatinatha-mobile-meditation-god-of-destruction-lord-shiva-family-hd-phone-wallpaper-ajld-1706349671.jpg" width=300px/>
// // <h1>Lord Shiva</h1>`
// p[2].style.backgroundColor="blue";
// p[2].innerHTML=`
// <img src="https://www.bhaktiwallpapers.com/uploads/2024/01/hindu-god-shiva-angry-pashupatinatha-mobile-meditation-god-of-destruction-lord-shiva-family-hd-phone-wallpaper-ajld-1706349671.jpg" width=300px/>
// // <h1>Lord Shiva</h1>`


// //document.getElementByclassName()
// //ex:-
// let p=document.getElementsByClassName("ptag");
// p[0].style.backgroundColor="blue";



// document.getElementByTagName()
// //ex:-
// let p=document.getElementsByTagName("p");
// p[0].style.backgroundColor="blue";


// pratice question 
let h2=document.querySelector("h2");
console.dir(h2.innerText);
h2.innerText=h2.innerText + "appn collage students"

