 let mydate=new Date()
// console.log(mydate);
// console.log(mydate.toDateString());
// console.log(mydate.toJSON());
// console.log(mydate.toISOString());
// console.log(mydate.toTimeString());
// console.log(typeof mydate);
// let mydate1=new Date(2023,0,24)
// let mydate1=new Date(2023,0,24,5,3)
let mydate1=new Date("2025-01-15")
// console.log(mydate1.toDateString());
// console.log(mydate1.toLocaleString());

let mytimestamp=Date.now()
// console.log(mytimestamp);
// console.log(mydate1.getTime());
// console.log(Math.floor(Date.now()/1000));
// consolelog(mydate.getFullYear());
// console.log(mydate.getDay());
// console.log(`date is ${mydate.getDate()} and the time is ${mytimestamp}`);

mydate.toLocaleString('default',{weekday:"long"})
console.log(mydate.toLocaleString('default',{weekday:"long"}));
