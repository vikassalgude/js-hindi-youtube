let a=100
// const b=20
// var c=300
if (true) {
    let a=10
    const b=20
    c=30
   // console.log("innner",a);
    
}
// console.log(a);
// // console.log(b);
// console.log(c);


function one(){
    const username="hitesh"
    function two(){
        const website="yt"
        console.log(username);
    }
    two()
    //console.log(website);
}
//one()
if (true) {
    const username="hitesh"
    if(username=="hitesh"){
       const website=" yt"
      // console.log(username+website)
    }
    //console.log(website);//error
    
}
//console.log(username);//error

// ####################interesting############################
function add(num){
    return num+1;
}
console.log(add(5));

const addtwo=function(num){
    return num+2
}
console.log(addtwo(5));

