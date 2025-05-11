const { use } = require("react");

function saymyname(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}
//saymyname()
function addnumbers(number1,number2){
    
    console.log(number1+number2);
    
}
function add(number1,number2){
    let s=number1+number2
    return s;
    //or return number1+number2
}
function loggedin(username){//(username="sam") default value
    if(username===undefined){//same as (!username)
        console.log("Please enter username");
        return
    }
    return `${username} just logged in`
}
// const res= add(2,3)
// addnumbers("2",3)
// addnumbers(3,null)
// console.log(res);
// console.log(loggedin())
// function calculatecartprice(...num1){//rest operator
//     return num1
// }

// console.log(calculatecartprice(2));
// console.log(calculatecartprice(2,3,5));
//o/p
// [ 2 ]
// [ 2, 3, 5 ]
function calculatecartprice(val1,val2,...num1){//rest operator
    return num1 
}

//console.log(calculatecartprice(2,7,3,4,4,5));
//here 2 will go to val1,and 7 will go in val2 and rest will be stored in array [3,4,4,5]
const user={
    username:"vikas",
    price:999
}
// function myobj(anyobject){
//     console.log(`Username is ${anyobject.username},price is ${anyobject.price}`);
    
// }
// myobj(user)
// myobj({
//     username:"sakiv",
//     price:342
// })
const arr=[1,2,3,4,4]
function retsecondval(getarr){
       return getarr[1]
}

console.log(retsecondval(arr));





