const arr=["thor","ironman","spiderman"]
const arr1=["superman","batman","flash"]
// arr.push(arr1)
// console.log(arr[3][2]);
// const arr3 =arr.concat(arr1)
// console.log(arr3);
// const arr4=[...arr1,...arr1]
// console.log(arr4);
const arr5=[1,2,3,[4,5,6],7,[,6,7,[4,5]]]
const arr6=arr5.flat(Infinity)
console.log(arr6);
console.log(Array.isArray("hitesh"))
console.log(Array.from("hitesh"))
console.log(Array.from({name:"hitsh"}))//interesting
let s=10
let s2=29
let s3=22
console.log(Array.of(s,s2,s3));

