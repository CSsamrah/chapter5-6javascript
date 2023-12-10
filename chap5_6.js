//EXERCISE 5.1 
let maxValue = Math.floor(Math.random())+ 100;
let randomValue=Math.floor(Math.random()*100);
console.log(maxValue);
console.log(randomValue);
// let correctValue= false;
// while(correctValue===false){
//     guessNumber=Number(prompt("enter the number between 1 to 100"));
//     if(guessNumber===randomValue){
//         correctValue=true;
//         alert("found the match")
//         console.log("found the match")
//     }
//     else if(guessNumber>randomValue){
//         alert("guess number was high")
        
//     }
//     else{
//         alert("guess number was low")
        
//     }
// }
//EXERCISE 5.2
let startingCounter=0;
let step=10;
do{
    console.log(startingCounter);
    startingCounter+=step;
}while(startingCounter<=100);
//exercise 5.3
let myWork=[];

for(let i=1;i<=10;i++){
    let status=i%2 ? true:false;
    let numblesson={
        name:`lesson ${i}`,
        stat:status
    }
    myWork.push(numblesson);
}
console.log(myWork);
//Exercise 5.4
let myTable=[];
let rows=3;
let columns=3;
let counter=0;
for(let i=0;i<rows;i++){
    let tempTable=[];
    for(let j=0; j<columns;j++){
        counter++;
        tempTable.push(counter);
    }
    myTable.push(tempTable);
}
console.table(myTable);
//Exercise 5.5
let gridArray=[];
let noOfCells=64;
let counter2=0;
let rowArray;
for(let i=0;i<noOfCells+1;i++){
    if(counter2%8==0){
        if(rowArray!=undefined){
            gridArray.push(rowArray);
        }
        rowArray=[];
    }
    counter2++;
    let temp=counter2;
    rowArray.push(temp);
}
console.table(gridArray)
//exercise 5.6
let newArray=[];
for(let i=0; i<10; i++){
    newArray.push(i);
}
console.log(newArray);
for(let j=0; j<newArray.length;j++){
    console.log(newArray[j])
}
for(let numbers of newArray){
    console.log(numbers);
}
//exercise 5.7
let house={
    number:220,
    owner:"samrah",
    forSale:true,
};
for(let objects in house){
    console.log(objects + ":" + house[objects])
}
let houseArray=["number","owner","forSale"]
for(let objects of houseArray){
    console.log(objects);
}
// Exercise 5.8
let string=""
let skipNumber=7;
for(let i=0;i<10;i++){
    if(i === skipNumber){
        continue;
    }
    string+=i;
}
console.log(string);
let string1=""
let skipNumber1=7;
for(let i=0;i<10;i++){
    if(i===skipNumber1){
        break;
    }
    string1+=i;
}
console.log(string1);
//chapter 5 project 
let multiTable=[];
for(let i=0; i<11;i++){
    let temp=[];
    for(let j=1; j<11;j++){
        temp.push(i*j);
    }
    multiTable.push(temp);
}
console.table(multiTable);
//CHAPTER 6
//EXERCISE 6.1
function addtwo(var1,var2){
    let result=var1 + var2;
    return result;
}
console.log(addtwo(4,5));
console.log(addtwo(6,8));
//EXERCISE 6.2
let random=["happy","sad","overjoyed","beautiful"]
function randomWords(){
let name=prompt("Write your name");
randomDescription=Math.floor(Math.random(random)*random.length);
console.log("hi " + random[randomDescription]+ " " + name);
}
randomWords();
//EXERCISE 6.3
function sumOfNumbers(x, y) {
    let sum = x + y;
    return sum;
}
function subOfNumbers(x, y) {
    let sub = x - y
    return sub;
}
let valueOfx = Number(prompt("enter the first value"));
let valueOfy = Number(prompt("enter the second value"));
let operator = prompt("enter the operation you want to perform");
if (operator === "+") {
    console.log(sumOfNumbers(valueOfx, valueOfy));
}
else if (operator === "-") {
    console.log(subOfNumbers(valueOfx, valueOfy));
}
else{
    console.log(sumOfNumbers(valueOfx,valueOfy))
}
//EXERCISE 6.4
const myArr = [];
for(let x=0; x<10; x++){
let val1 = 5 * x;
let val2 = x * x;
let res = cal(val1, val2, "+");
myArr.push(res);
}
console.log(myArr);
function cal(a, b, op) {
if (op == "-") {
return a - b;
} else {
return a + b;
}
}
//EXERCISE 6.5
let val = "1000";
(function () {
let val = "100";
console.log(val);
})();
let result = (function () {
let val = "samrah";
return val;
})();
console.log(result);
console.log(val);
(function (val) {
console.log(`My name is ${val}`);
})("samrah");
//EXERCISE 6.6
function calcFactorial(nr) {
    console.log(nr);
    if (nr === 0) {
    return 1;
    }
    else {
    return nr * calcFactorial(--nr);
    }
    }
    console.log(calcFactorial(4));
//EXERCISE 6.7
let start = 10;
function loop1(val) {
console.log(val);
if (val < 1) {
return;
}
return loop1(val - 1);
}
loop1(start);
function loop2(val) {
console.log(val);
if (val > 0) {val--;
    return loop2(val);
    }
    return;
    }
    loop2(start);
//EXERCISE 6.8
const test = function(val){
    console.log(val);
    }
    test('hello 1');
    function test1(val){
    console.log(val);
    }
    test1("hello 2");
//PROJECT CHAPTER 6
//recursive function
const main = function counter(i) {
    console.log(i);
    if (i < 10) {
    return counter(i + 1);
    }
    return;
    }
    main(0);
// SET TIMEOUT ORDER
const one = ()=> console.log('one');
const two = ()=> console.log('two');
const three = () =>{
console.log('three');
one();
two();
}
const four = () =>{
    console.log('four');
    setTimeout(one,0);
    three();
    }
    four();