const  tinderuser=Object() //same as const tinderuser={}
//console.log(tinderuser);
tinderuser.id="1234"
tinderuser.name="vikas"
tinderuser.isloggedin=false
//console.log(tinderuser);
const regularuser={
    email:"vikas@gmail.com",
    fullname:{
            userfullname:{
               firstname:"vikas",
               lastname:"salgude"
            }
    }

}
//console.log(regularuser.fullname?.userfullname.firstname);
const obj1={1:"a",2:"b",3:"c",4:"d"}
const obj2={5:"l",6:"h",7:"g"}
// const obj3={obj1,obj2}
// const obj3=Object.assign(obj1,obj2)
// const obj3=Object.assign({},obj1,obj2)
const obj3={...obj1,...obj2}
// console.log(obj3)
const users=[{id:"123",email:"cikas"},{id2:"12313",email1:"cfwef"}]
// console.log(users[0].email);
// console.log(Object.keys(obj3))
// console.log(Object.values(obj3))
// console.log(Object.entries(obj3))
