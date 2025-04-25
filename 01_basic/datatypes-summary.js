 "use strict"// treat all JS code as newer version 
// //primmitive data types
// // 7 types string number boolean null undefined symbol BigInt
// const score=22
// const score01=22.266
// const isLoggedIn=false;
// const outside=null
// let userEmail;
// const id=Symbol("123")
// const id1=Symbol("123")
// const bignumber=4088174898437895783n;
// console.log(bignumber)
// //reference (non primitive)
// //array object functions
// const heroes=["shaktiman","batman","marco"]
// let myobj={
//     name:"vikas",
//     age:22
// }
// const myfunc=function(){
//     console.log("hello world")
// }
// console.log(typeof myfunc)
// console.log(typeof bignumber)
// console.log(typeof myobj)
// console.log(typeof heroes)


// **********lect10************
// stack(primitive) heap(non-primitive)
let name1="vikassalgude"
let name2=name1


name2="xyz"
console.log(name1)
console.log(name2)
let my={
    email:"vghvk",

}

let ur=my
ur.email="njin"
console.log(my.email)
console.log(ur.email)



