// exercise 3
// elem.innerHtml is used to populate a with hTML
// website with a div tag
// every reload ma different jokes huna paryo
// min jokes = 10

// let jokes = [
//   "What do you call a boomerang that won't come back?<br> A stick.",

//   "What does a cloud wear under his raincoat? <br>Thunder-wear.",

//   "Two pickles fell out of a jar onto the floor? <br> What did one say to the other Dill with it.",

//   "What time is it when the clock strikes 13?<br> Time to get a new clock.",

//   "How does a cucumber become a pickle?<br>It goes through a jarring experience.",

//   "What did one toilet say to the other ? <br>You look a bit flushed.",

//   "What do you think of that new diner on the moon Food was good?<br> but there really wasn't much atmosphere.",

//   "Why did the dinosaur cross the road? <br>Because the chicken wasn't born yet.",

//   'Why can\'t Elsa from Frozen have a balloon?<br> Because she will "let it go, let it go."',

//   "What musical instrument is found in the bathroom ?<br> A tuba toothpaste.",

//   "Why don't scientists trust atoms? <br>Because they make up everything.",

//   "I told my wife she was drawing her eyebrows too high? <br>She looked surprised.",

//   "Why did the tomato turn red? <br>Because it saw the salad dressing!",

//   "What do you call a lazy kangaroo? <br>A pouch potato!",

//   "Why did the chicken cross the playground?<br> To get to the other slide.",
// ];

// randomJoke.innerHTML = "<h1>This is some HTML content!</h1>";

// let divJoke = document.getElementById("joke");
// randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
// divJoke.innerHTML = randomJoke;

// for(let key in jokes){
//     console.log(jokes[key])
// }

// function

// innerhtml outerhtml and other properties
// events
// let spans = document.getElementsByTagName("span")[0]
// console.log(spans)
// spans.style.color = "red"
// spans.innerHTML = "<h1>Hi, I AM A MODIFIED SPAN </h1>"
// console.dir(spans) // as a object dekhauxa

// inner html and outer html
// innnerhtml LE CONTENT MATRA CHANGE GARXA
// let span1 = document.getElementById("first")
// span1.innerHTML = "<b> HI</b>"

// first.outerHTML = "<div> hey this is outer-html </div>"
// full element lai change garna milxa
// console.log(document.body.firstChild.data)
// console.log(document.body.textContent)

// first.hidden = false

// attributes, method and techniques

// to get the class
// let first = document.getElementById("first");
//  let a = first.getAttribute("class")
// console.log(a)

// console.log(first.hasAttribute("class"))
// console.log(first.hasAttribute("style"))
// first.setAttribute ("hidden", "true")
// first.setAttribute ("class", "true sachin")
// first.removeAttribute("class")
// console.log(first.attributes)

// data- attributes //custom attribute set garne tarika

// console.log(first.dataset)
// console.log(first.dataset.game)
// console.log(first.dataset.player)

// html insertion method

// let a = document.getElementsByTagName("div")[0];
//  a.innerHTML += "<h1>Hello World</h1>"

// using createElement
// let div = document.createElement("div");
// div.innerHTML = "<h1>Hey Sexy Boy</h1>";

//  a.append(div)
//  a.prepend(div) // inner div ko bahira janxa

//  a.before(div) // div bhanda bahira rakhxa
//  a.after(div)
// a.replaceWith(div);

// insert adjacent HTML/ text/element //use single quotes

// let first = document.getElementById("first")
// first.insertAdjacentHTML ('afterend', '<div id="test"> afterend</div>')
// afterend ,beforend , afterbegin ,beforebegin
// first.insertAdjacentHTML('afterbegin','<div id="test">afterbegin </div>')
// first.insertAdjacentHTML('beforebegin','<div id="test">beforebegin</div>')
// first.insertAdjacentHTML('beforeend','<div id="test"> beforeend</div>')
// first.remove()

// changing html classes using js className and classList

let first = document.getElementById("first");
// first.className = "text-black red blue-shirt"

// to remove specific class of an element

// first.classList.remove("red")

// first.classList.add("red")

// we can use toggle to add when it is not and remove when it is there

// first.classList.toggle("red") // red thiyo so remove hunxa

// to check we use elem.classList.contains("class")

// console.log(first.classList.contains("red")) // false output

// setTimeout and settime interval

// alert("Hello I am Alert")

//  let a = setTimeout (function(){
//     alert("Hello I am  Inside of setTimeout")
// },5000)
// let b = prompt("Do you want to run the setTimeout?")
// if("n"== b){
//     clearTimeout(a) // hatauna lai settimeout
// }
// console.log(a) // timerId

// const sum =(a,b,c) => {
//     console.log("Hey, I am Running " + (a + b + c))
//    a+ b
// }
// setTimeout(sum,1000,1,2,7)

//setInterval same ho tara continuous loop ma chalxa
// setInterval(function(){
//     alert("hey i am setInterval")
// },3000)
// let c = prompt("Do you want to run the setInterval?")
// if( "n" == c){
//     clearInterval(c) // hatauna lai setInterval
// }

// const sum =  (p,q) => {
//     console.log("hey i am setInterval " + (p+q) )
//  p+q
// }
// setInterval(sum,1000,2,4)
// clearInterval(2)  // timer id 2 raixa

// BROWSER EVENTS AND HANDLING

// dom events eg

// let a = document.getElementsByClassName("container")[0]
// a.onclick = () => {
//     let b = document.getElementsByClassName("container")[0]
//     b.innerHTML = "Hello World"
// }

// event listener and more

// let btn = document.getElementById("btn");
// let x = function (e) {
//   alert("hello world1!");
// };
// btn.addEventListener("click", x);

// let y = function (e) {
//   alert("hello world2!");
// };
// btn.addEventListener("click", y);

// let a = prompt("ENTER YOUR FAVORITE NUMBER");
// if (a == "2") {
//   btn.removeEventListener("click", x);
// }

// removeEventListener only works when function object is same
// just like calling y or x in abpve example

// Event function object

// let btn = document.getElementById("btn");
// let x = function (e) {
//   console.log(e);
//   console.log(e.target);
//   console.log(e.type);
//   console.log(e.currentTarget);
//   console.log(e.clientX);
//   console.log(e.clientY);
// };
// btn.addEventListener("click", x);

// exercise chapter 8

// program to show different alerts when buttons are click

// program to store bookmarks by website

// document.getElementById("google").addEventListener("click", function () {
//   window.location = "https://www.google.com";
//   window.focus();
// });

// to run Q2 every 5 sec   // await can only be used with async function

// const fetchContent = async (url) => {
//   con = await fetch(url)
//   let a = await con.json()
//   return a
// }

// setInterval(async function () {
//   let url = "https://jsonplaceholder.typicode.com/todos/1";
//   console.log(await fetchContent(url));
// },3000);

// create a glowing bulb effect using classlist toogle method in js
// setInterval(async function () {
//   document.querySelector("#bulb").classList.toggle("bulb");
// },5000);

// let btn = document.getElementById("btn")
// btn.addEventListener('click', function(e) {
//   document.querySelector("#bulb").classList.toggle("bulb");
// })

// callbacks promises and async/await
// chapter 9

// synchronous  programming palia palo hunxa

// let a = prompt("What is your name?")
// let b = prompt("What is your age?")
// let c = prompt("What is your favorite color?")
// console.log(a + " is " + b  + " Years old and " + c + " is his favorite color.")

// \\ blackbox aauxa

// asynchronous programming
// console.log("Start")
// setTimeout ( function(){
//   console.log("hey i am asynchronous section or function")
// },3000)
// console.log("End")

// suru ma start aayo ani end balla  settime out load vyao
// so asynchronous pattern ma code execute hunxa

// callbacks and handling callback errors

// function loadScript(src, callback) {
//   var script = document.createElement("script");
//   script.src = src;
//   script.onload = function () {
//     console.log("Loaded script with SRC: " + src);
//     callback(src);
//   };
// script.onerror = () => {
//  console.log("Error loading script with SRC: " + src );
//  callback( new Error("Src got some error"))   // }
//   document.body.appendChild(script);
// }

//function lai attach garna paryo function ma ani callback le kamm garxa

// function hello(src) {
//   alert("hello world " +   src);
// }

// function goodmorning(src) {

//   alert("Good Morning " + src);
// }
// loadScript(
//   "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js",
//   hello
// );

// callback ma argument diyera value print garna sakinxa

// callback + error handing example

//  function loadScript(src, callback) {
//   var script = document.createElement("script");
//   script.src = src;
//   script.onload = function () {
//     console.log("Loaded script with SRC: " + src);
//     callback(null, src);
//   };
//   script.onerror = () => {
//    console.log("Error loading script with SRC: " + src );
//    callback( new Error("Src got some error"))
//   }
//   document.body.appendChild(script);
// }

// // function lai attach garna paryo function ma ani callback le kamm garxa

// function hello(error,src) {
//   if(error){
//     console.log(error)
//     return
//   }
//   alert("hello world " +   src);
// }

// function goodmorning(error, src) {
//   if(error){
//     console.log(error)
//     return
//   }

//   alert("Good Morning " + src);
// }
// loadScript(
//   "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js",
//   goodmorning
// );

// callback hell / pyramid of DOOM

// function loadScript(src, callback) {
//   var script = document.createElement("script");
//   script.src = src;
//   script.onload = function () {
//     console.log("Loaded script with SRC: " + src);
//     callback(null, src);
//   };
//   script.onerror = () => {
//     console.log("Error loading script with SRC: " + src);
//     callback(new Error("Src got some error"));
//   };
//   document.body.appendChild(script);
// }

// // function lai attach garna paryo function ma ani callback le kamm garxa

// function hello(error, src) {
//   if (error) {
//     console.log(error);
//     return;
//   }
//   alert("hello world " + src);
// }

// loadScript(
//   "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js", function goodMorning(error, src) {
//                     if (error) {
//                     console.log(error);
//                     sendEmergencyMessageToCeo();
//                     return;
//                     }
//                              loadScript(
//                                 "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap2.bundle.min.js", function goodMorning(error, src) {
//                                     if (error) {
//                                     console.log(error);
//                                     sendEmergencyMessageToCeo();
//                                     return;
//                                     }
//                         loadScript(
//                         "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap3.bundle.min.js",
//                         function goodMorning(error, src) {
//                             if (error) {
//                             console.log(error);
//                             sendEmergencyMessageToCeo();
//                             return;
//                             }
//           });
//       })
//   });

// use of promises to manage callback/pyramid of dOOM
// setTimeout asynchronous function ho
// promise ko syntax -- state result
// let promise = new Promise( function (resolve, reject){
//     alert("Hello")
//    resolve(56)
// })

// console.log("hello 1")
// setTimeout( ()=> {
//     console.log("Hello in two seconds")
// },2000)
// console.log("My name is " + 'Hello three')
// console.log(promise)

// promises is used for parallel processing

// fetch google.com homepage  --> clg("google.com")
// fetch data from the data api
// fetch pictures from the server
// print downloading
// rest of the script

// promises.then()   // promises.catch()

// let p = new Promise((resolve, reject) => {
//   console.log("Promise is pending");
//   setTimeout(() => {
// alert("I am SetTimeout and I am fulfilled")
//     console.log("I am Promise and I am resolved");
//     resolve(true); //or
//reject ( new Error(" i AM AN ERROR"))
//   }, 3000);
// });

// let p1 = new Promise((resolve, reject) => {
//   console.log("Promise is pending");
//   setTimeout(() => {
//     console.log("I am Promise and I am rejected");
//     reject(new Error(" I AM AN ERROR"));
//   }, 3000);
// });
// to get the value
// p.then((value) => {
//     console.log(value);
//   });

// to get the error
// p1.catch((error) => {
//   console.log("Some Error Ocurred");
//   console.log(error)
// });

// another method
// let p2 = new Promise((resolve, reject) => {
//     console.log("Promise is pending");
//     setTimeout(() => {
//       console.log("I am Promise and I am rejected");
//       reject(new Error(" I AM AN ERROR"));
//     }, 3000);
//   });

// p2.then ((value) => {
//     console.log(value)
// },(error)=>{
//     console.log(error)
// })

// loadscript using promises

// let p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("Resolved after 3 seconds");
//     resolve(56);
//   }, 3000);
// });

// p1.then((value) => {
//   console.log(value);
//   let p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Promise 2");
//     }, 2000);
//   });
//   return p2;
// }).then((value) => {
//   console.log("we are done");
//   return 2
// });

// promise chaining

// loadscript  using promises

// const loadScript = (src) => {
//      return new Promise(( resolve,reject) => {
//      let script = document.createElement("script")
//      script.type= "text/javascript"
//      script.src =  src;
//      document.body.appendChild(script)
//      script.onload= ()=>{
//           resolve("script has been loaded sir")
//      }
//        script.onerror = () => {reject(0)}
// })
// }

// let p3 = loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js")
// p3.then((value)=>{
//      console.log(value)
//      return loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js")
// }).then((value)=>{
//      console.log("Second script Ready")
// })
// .then((value)=>{
//      console.log("Third script Ready")
// }).catch((error) =>{
//      console.log("error loading the script")
// })

// Attaching Multiple Handlers to a Promise

// let p = new Promise((resolve, reject) => {
//   console.log("HeY I AM RESOLVED");
//   setTimeout(() => {
//     resolve(1);
//   }, 3000);
// });

// // promise chaining
// p.then(() => {
//   console.log("Hurray!!");
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//        resolve(4);
//     }, 3000);
//   });
// }).then((value) => {
//   console.log(value);
// });

// p.then(() => {
//   console.log("CONGRATS PROMISE IS RESOLVED");
// });

// duitai p.then() chai attaching multiple handlers

//  promise API

// let p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("value 1");
//     // reject( new Error("error"))
//   }, 1000);
// });
// let p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // resolve("value 2");
//     reject(new Error("Whoops!!"));
//   }, 2000);
// });
// let p3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("value 3");
//   }, 3000);
// });

// p1.then((value) => {
//   console.log(value);
// });
// p2.then((value) => {
//   console.log(value);
// });
// p3.then((value) => {
//   console.log(value);
// });

// promise API

//  let promise_all = Promise.all([p1,p2,p3])
//  promise_all.then((value)=> {
//   console.log(value)
//  })

// Promise.allSettled // error haru handle garna help garxa

//  let promise_all = Promise.allSettled([p1,p2,p3])
//  promise_all.then((value)=> {
//   console.log(value)
//  })

// Promise.race
// jun pahila hunxa tei dekhauxa

// let promise2_all = Promise.race([p1, p2, p3]);
// promise2_all.then((value) => {
//   console.log(value);
// });

// promise.any  // error through gardena value dekhauxa..
// jun hunxa tesko

// let promise1_all = Promise.any([p1, p2, p3]);
// promise1_all.then((value) => {
//   console.log(value);
// })

// promise.resolve // promise .reject

// let promise_all = Promise.reject( new Error("Whoops!"))
// let promise1_all = Promise.resolve("Whoops!")
// console.log(promise1_all)

// async and await
// async function insures it returns a promise

// async function harry() {
//   let delhiWeather = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("27 Deg");
//     }, 1000);
//   });
//   let bangaloreWeather = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("21 Deg");
//     }, 4000);
//   });

//   // delhiWeather.then(alert)
//   // bangaloreWeather.then(alert)
//   console.log("Fetching Delhi Weather Please wait....");
//   let delhiW = await delhiWeather;
//   console.log("Delhi Weather is fetched and is " + delhiW);

//   console.log("Fetching Bangalore Weather Please wait....");
//   let bangaloreW = await bangaloreWeather;
//   console.log("Bangalore Weather is fetched and is " + bangaloreW);
//   return [delhiW, bangaloreW];
// }
// const cherry = async () => {
//   console.log("hello i am cherry and i am  waiting");
// };

// const main = async ()=> {
//   console.log("Welcome to Weather Control Center.")
//   let a =  await harry();
//   let b =  await cherry();
// //   a.then((value) => {
// //     console.log(value);
// //   });
//  }
// main()


// await garesake paxi palai palo execute hunxa program..


// error handling with try and catch