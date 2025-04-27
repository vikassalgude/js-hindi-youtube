const myarr=[0,1,2,3,4,5]
console.log(myarr[0]);
const arr=["bdush","ncjwi","wded"]
const arr1=new Array(1,2,3,4)
arr1.push(3)
console.log(arr1.length);
arr1.unshift(10)
arr1.shift()
arr1.shift()

const newarr=arr1.join()
// console.log(arr1.includes(3));
// console.log(typeof newarr);
console.log("A",myarr);
//slice
const mya1=myarr.slice(1,3)
console.log(mya1);
console.log("B",myarr);
//splice

const mya2=myarr.splice(1,3)
console.log(mya2);
console.log("C",myarr);


