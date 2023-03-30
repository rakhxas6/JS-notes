// alert("Hey we are learning about prompt and confirm")

// let a = prompt("Enter a here")
// a = Number.parseInt(a)

// alert("you enter type " + (typeof a))
// let write = confirm("do want to edit the data")
// if(write){
//     document.write(a)
// }
// else{
//     document.write("Please allow me to write ")
// }

//BOM (DOM- html lai js object) window object
// BOM - browser object model---- prompt alert confirm are part of BOM

// document.body.innerHTML ="HELLO WORLD"
// let HElloJS = document.getElementById("helloJs")
// HElloJS.innerHTML = "HELLO WORLD MOTHERFUCKER"

//practice set 6

// let runAgain = true
// while (runAgain) {
//     let a = prompt("Enter Your Age");
// a = Number.parseInt(a);
// if(a<0){
//     console.error("Please enter valid age")
//     break;
// }
//   if (a >= 18) {
//     alert("You can drive");
//   } else {
//     alert("You can't drive");
//   }
//   runAgain = confirm("If u want to see the prompt again");
// }

// let a = prompt("Enter Your Number");
// a = Number.parseInt(a);
// if (a > 4){
//     location.href = "https://www.google.com"
// }

// let color = prompt("Enter the page background color")
// document.body.style.background = color

// exercise 2 eg

// use js to create a game of snake water and gun the game should be able to randomly generate S, W, G. and declare win or loss using alert
// prompt and confirm can also be used

// let user = prompt("Enter S, W or G");
// let cupI = Math.floor(Math.random() * 3);
// let cpu = ["S","W","G"][cupI] //( d= 0, 1 = w , g = 2) //value assign garna lai ho

// const match = (cpu,user) => {
//     if (cpu === user) {
//         return "The match is tied"
// }else if(cpu === "S" && user ==="W"){
//     return "cpu"
// }
// else if(cpu === "S" && user ==="G"){
//     return "user"
// }
// else if(cpu === "G" && user ==="S"){
//     return "cpu"
// }
// else if(cpu === "G" && user ==="W"){
//     return "user"
// }
// else if(cpu === "W" && user ==="S"){
//     return "user"
// }
// else if(cpu === "W" && user ==="G"){
//     return "cpu"
// }
// }
// let result = match(cpu,user)
// console.log(`Cpu:${cpu} and User:${user} \nThe winner is : ${result}`)
// document.write(`Cpu:${cpu} and User:${user} \nThe winner is : ${result}`)

//walking the dom
// accessing the children of an element

// console.log(document.body.firstChild)
// console.log(document.body.lastChild)
// console.log(document.body.childNodes) //its not an  array must be converted to array using array.from

// let arr = Array.from(document.body.childNodes)
// console.log(arr)

// parents and siblings of an element

// console.log(document.body.firstChild)
// a = document.body.firstChild
// console.log(a.parentNode)
// console.log(a.parentElement)
// console.log(a.firstChild.nextSibling)

// document.body.style.background = "yellow";

// let b = document.body
// console.log("First child of b is : ", b.firstChild)
// console.log("First Element child of b is : ", b.firstElementChild)

// table navigation

// let t = document.body.firstElementChild.firstElementChild
// console.log(t)

// console.log(t.rows)
// console.log(t.rows[0])
// console.log(t.caption)
// console.log(t.tHead.firstElementChild)
// console.log(t.tFoot)
// console.log(t.tBodies)

// DOM searching

// let ctitle = document.getElementsByClassName("card-title")[0];
// ctitle.style.color = "red";

// let ctitle1 = document.getElementsByClassName("card-title")[1];
// ctitle1.style.color = "yellow";

// let ctitle2 = document.getElementsByClassName("card-title")[2];
// ctitle2.style.color = "blue";

// queryselector le css selector use garera sabai lai select garxa
//classname (".element")   //id ("element")

// let ctitles = document.querySelectorAll(".card-title")
// ctitles[0].style.color = "blue"
// ctitles[1].style.color = "red"
// ctitles[2].style.color = "cyan"

// document.querySelector(".this").style.color = "blue"

// matches closest and contains in dom searching

// let id1 = document.getElementById("id1")
// let id2 =document.getElementsByClassName(".id2")
// console.log(id1)
// console.log(id1.matches(".class"))
// console.log(id1.matches(".box"))
// console.log(sp1.closest("#sp1"))
// console.log(id1.contains(sp1))
// console.log(sp1.contains(sp1))

// chapter 7 practice set

// let id1 = document.getElementById("li1")
// id1.style.color = "red"

let id2 = document.body.firstElementChild.firstElementChild.firstElementChild;
console.log(id2);
id2.style.color = "blue";

let id3 = document.body.firstElementChild.firstElementChild.lastElementChild;
console.log(id3);
id3.style.color = "blue";

Array.from(document.getElementsByTagName("li")).forEach(element => {
    element.style.background = "cyan"
});
