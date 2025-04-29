//singleton

// ..object literals
// Object.create
const mysym=Symbol("hello")
const jsuser={
    [mysym]:"jk",
    name:"hitesh",
    age:15,
    isloggedin:false,
    lastlogindays:["monday","saturday"],
   "full name":"vikas salgude"
}
console.log(jsuser["full name"]);
console.log(typeof jsuser[mysym]);
jsuser.age=18
//Object.freeze(jsuser)
jsuser.age=0
console.log(jsuser.age);
jsuser.greetings=function(){
    console.log("helllo");
    
}
jsuser.greetings2=function(){
    console.log(`hello,${this.name}`);
    
}
console.log(jsuser.greetings());
console.log(jsuser.greetings2());



// const arr=[1,2,23,3]

