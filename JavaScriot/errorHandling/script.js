// scheduled code ma  try run hunxa catch hudaina
// try {
//   setTimeout(() => {
//   console.log(rahul);
//   }, 100);
// } catch (error) {
//   console.log(error);
// }
// timeout function vitra define garne ho vane chain duitaii handle hunxa
// try {
//   setTimeout(() => {
//     try {
//       console.log(rahul);
//     } catch (error) {

//     }
//   }, 100);
// }
// catch (error) {
//   console.log(error);
// }

// direct call ma chai duitai hunxa
// try {
//     console.log(rahul);

// } catch (error) {
//   console.log(error);
// }

// yesma chai try run hunxa catch hudaina

// try {
//   setTimeout(() => {
//     console.log(rahul);
//   }, 100);
// } catch (error) {
//   console.log(error);
// }

//   setTimeout(() => {
//     console.log("Hacking wifi... Please wait....");
//   }, 1000);

//   setTimeout(() => {
//     console.log("Fetching username and password... Please wait....");
// }, 2000);

// setTimeout(() => {
//   console.log("Hacking Rahul's facebook id ... Please wait....");
// }, 3000);

// setTimeout(() => {
//   console.log("Username and password of Rahul (+9193567001) fetched ");
// }, 4000);

// the error object and custom errors

// try {
//       console.log(harry)
//                     throw new Error("Harry is not good ")    // custom error
// }
// catch (error) {
//           console.log(error)
//           console.log(error.name)
//           console.log(error.message)
//           console.log(error.stack)
// }

// throw use garera custom syntax dina sakinxa

// try {
//   let age = prompt("Enter your age");
//   age = Number.parseInt(age);
//   if (age > 150) {
//     throw new ReferenceError("This is probably not true");
//   }
// } catch (error) {
//   console.log(error.name);
//   console.log(error.message);
//   console.log(error.stack);
// }
// console.log("the script is still running");

// finally -----> it will always run.

// try {
//   let a = 0;
//   console.log(program);
//   console.log("Program run sucessfully");
// } catch (error) {
//   console.log("This is an error");
//   console.log(p);
// } finally {
//   console.log("I am a good Boy.");
// close the file
// exit the loop
// write to the log file
// }
//finally is used for cleanup

//  const f = () => {

//    try {
//      let a = 0;
//     //  console.log(program);
//      console.log("Program run successfully");
//      return
//    } catch (error) {
//      console.log("This is an error");
//      console.log(p);
//    } finally {
//      console.log("I am a good Boy.");
//    }
//  }
//  f()
// console.log("end")
// it will run in each cases
// if there is a return in try finally is executed just before the control returns to the outer code

// chapter nine practice set

// program to load a js file in a browser using promises .use .then()
// to display an alert when the load is complete

//  let p = new Promise((resolve,reject) => {
//   setTimeout( ()=> {
//     console.log("The Load is complete.")
//     resolve(50)
//  },3000)
// })
// p.then(() => {
//   console.log(alert("The load is Complete"))
// })

//use async and await syntax
// async function harry() {
//   let para = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("The Load is complete.");
//       resolve(50);
//     }, 3000);
//   });
//   let newP = await para;
//   console.log("the load is complete " + newP);
// }
// harry()
// para.then(() => {
//   console.log(alert("The load is Complete"));
// });

// const loadScript = async (src)=> {
//   return new Promise((resolve,reject)=>{
//    let script = document.createElement("script")
//    script.src = src
//    script.onload = () => {
//      resolve(src + " Done Success")
//    }
//    document.head.append(script)
//   })
// }
// const main = async ()=>{
//   console.log(new Date().getMilliseconds())
//   let a =  await loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js")
//   console.log(a)
//   console.log(new Date().getMilliseconds())
// }
// main()

// const loadScript = async (src)=> {
//   return new Promise((resolve,reject)=>{
//    let script = document.createElement("script")
//    script.src = src
//    script.onload = () => {
//      resolve(src + " Done Success")
//    }
//    document.head.append(script)
//   })
// }

//   let a =  loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js")
//  a.then((value)=>{
//     console.log(value)
//   })

// const p = async () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject(new Error("whoops!"));
//     }, 3000);
//   });
// };

// let a = async () => {
//   try {
//     let c = await p();
//     console.log(c);
//   } catch (error) {
//     console.log("This error has been handled.")
//   }
// };
// a();

// problem 4 promise.all vs single call of promise

// let p1 = async ()=>{
//   return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//       resolve(10)
//     },1000)
//   })
// }
// let p2 = async ()=>{
//   return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//       resolve(20)
//     },2000)
//   })
// }
// let p3 = async ()=>{
//   return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//       resolve(30)
//     },3000)
//   })
// }

// const run = async ()=>{
//   console.time("run")
//   // it decreases the run time significantly
//  let a1a2a3 = await Promise.all([p1,p2,p3])
//  console.log(a1a2a3)
//   // let a1 = await p1() //fetch first ten products from the dB
//   // let a2 = await p2() //fetch another first ten products from the dB
//   // let a3 = await p3() //fetch another another first ten products from the dB
//   // console.log(a1,a2,a3)
//   console.timeEnd("run")
// }
// run()

// fetch api
// it is an 2 stage process

// let p = fetch("https://goweather.herokuapp.com/weather/Newyork");
// p.then((value1) => {
//   console.log(value1.status);
//   console.log(value1.ok);
//   return value1.json();
// }).then((value2) => {
//   console.log(value2);
// });
// p.then((response) => {
//   console.log(response.status);
//   console.log(response.ok);
//   console.log(response.headers);
//   return response.json();
// }).then((value2) => {
//   console.log(value2);
// });

// request headers
// let request = fetch ("https://goweather.herokuapp.com/weather/Newyork",{
//   headers:{
//     authentication :"secret"
//   }
// })
// console.log(request)

// post request
// const createTodo = async (todo) => {
// let options =  {
//   method: "POST",
//   headers: {
//     "Content-type" : "application/json"
//   },
//   body: JSON.stringify(todo),
// }
// let p = await fetch('https://jsonplaceholder.typicode.com/posts',options)
// let response = await  p.json()
// return response
// }

// const mainFunc = async() => {
//   let todo = {
//     title: "Harry",
//     body: "brother",
//     userId: 1100,
//   }
//   let hey = await createTodo(todo)
//   console.log(hey)
// }

// mainFunc()

// const getTodo = async(id) => {
//   let response = await  fetch('https://jsonplaceholder.typicode.com/posts/' + id)
//   let r = await response.json()
//   return r
// }

// const createTodo = async () => {
// let options =  {
//   method: "POST",
//   headers: {
//     "Content-type" : "application/json"
//   },
//   body: JSON.stringify({
//     title: "Harry",
//     body: "brother",
//     userId: 1100,
//   }),
// }
// let p = await fetch('https://jsonplaceholder.typicode.com/posts',options)
// let response = await  p.json()
// return response
// }

// const mainFunc = async() => {

//   let hey = await createTodo()
//   console.log(hey)
//   console.log(await getTodo(101))
// }

// mainFunc()

// hackerman video no 65
// write a js program to pretend to hack like a hacker. Write a async function
// which will simply display the following output

//{ initializing Hack program
// hacking ashish username
// username found
// connecting to facebook
// try to use html and styling if possible}

//hackerman

//     let p1= new Promise ((resolve,reject) => {
//         setTimeout(()=>{
//             console.log("initializing Hack program")
//             resolve(50)
//         },1000)

//         })
//     let p2= new Promise ((resolve,reject) => {
//         setTimeout(()=>{
//             console.log("hacking ashish username")
//             resolve(50)

//         },2000)
//         })
//     let p3= new Promise ((resolve,reject) => {
//         setTimeout(()=>{
//             console.log("username found")
//             resolve(50)
//         },3000)
//         })
//     let p4= new Promise ((resolve,reject) => {
//         setTimeout(()=>{
//             console.log("connecting to facebook")
//             resolve(50)
//         },4000)
//         })

// const hacker_man = async ()=> {
//             await Promise.all([p1,p2,p3,p4])
//             return [p1,p2,p3,p4]
// }

// const mainFunc = async () => {
//    let p = await hacker_man()
//    console.log(p)
// }
// mainFunc()

// cookies setCookie() getCookie()
// localStorage setItem() getItem() removeItem()

// console.log(document.cookie)
// document.cookie = "name = harry12345"
// document.cookie = "name = harry12345"
// document.cookie = "name = harry12345"
// encodeuri component le junsukai character lai ni  ligxa
// decodeuri component le  character lai decode garxa

// let key = prompt("enter the key")
// let value = prompt("enter the value")
// document.cookie = `${encodeURIComponent(key)} = ${encodeURIComponent(value)}`
// console.log(document.cookie)

// local storage

// localStorage.setItem("name", "hari")
// localStorage.setItem("name", "Ram")
// localStorage.setItem("name", " Shyam")

document.body.style.background = "yellow";
// const paragraph = document.createElement ('h1')
// paragraph.textContent = "hello world"
// document.body.appendChild(paragraph)



// let key = prompt("enter the key");
// let value = prompt("enter the value");

// localStorage.setItem(key, value);
// console.log(`The value at ${key} is ${value}`);
// console.log(`The value at ${key} is ${localStorage.getItem(key)}`);

// if (key == "red" || key == "blue") {
//   localStorage.removeItem(key);
// }
// if (key == 0) {
//   localStorage.clear(); 
// }
// localStorage.length


// session storage

// it holds in a single tab  will be different in another tab
// remove clear()
// sessionStorage.setItem("name","Harry")

// console.log(sessionStorage.getItem("name"))

// localStorage.setItem("name", "harry")

// window.onstorage = (e) => {
//     alert("changed")
//     console.log(e)
// }
// localStorage.setItem("name", "harry")



// chapter 10 
// practice set10


// use a free api from the internet and feed your app with live data

// let url = "https://kontests.net/api/v1/all"
// let response = fetch(url)
// response.then((v) => {
//     return v.json()
// }).then ((contests)=> {
//       console.log(contests)
//       ihtml = ""
//       for(item in contests){
//       console.log(contests[item])
//       ihtml += `<div class="card" style="width: 23rem;">
//       <img src="./index.jpg" class="card-img-top py-3" alt="...">
//       <div class="card-body">
//         <h5 class="card-title">${contests[item].name}</h5>
//        <p class="card-text "> <a a href =${contests[item].url} > Visit Here </a></p>
//        <p>Starts at : ${contests[item].start_time}</p>
//        <p>Ends at : ${contests[item].end_time}</p>
//         <a href="#" class="btn btn-primary">Go somewhere</a>
//       </div>
//     </div>
//     `
// }
// cardContainer.innerHTML = ihtml;
// })


// exercise 6 todo list 
// create a todo list app capable to store your todos in localstorage add an option to create, delete and access the todos


// object oriented programming in JS

//prototypes in oop

