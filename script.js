/*1.
function makeQuestion(a, b, c) {
 
    return console.log('What is the ' + a, b, c, )      
}
makeQuestion("oprd1", "opr", "oprd2"); 
//2.
let obj = {};
obj.name = 'arman';
obj['country'] = 'Armenia'
Object.defineProperty(obj, 'age', {
    value: '19'
});
console.log(obj)
//3.???
let arr = ['b', 'a', 'a', 'a'];
for(i = 0; i < arr.length; i++) {
    if((arr[i] !== arr[i-1]) && arr[i] !== arr[i+1]){
        console.log(arr[i])
        break;
    }
}
//4.
let arr = [4, 32, 2, 5, 8];
let result = 0;
for(i = 0; i < arr.length; i++) {
    for(j = i + 1; j < arr.length; j++){
        if(arr[i] > arr[j]){
            result = arr[i];
            arr[i] = arr[j];
            arr[j] = result;
        }
    }
}
let resultarr = [];
resultarr.push(arr[0]);
resultarr.push(arr[arr.length-1]);
console.log(resultarr);

//5.
    let arr = [1,2,3,4,5,6,7,8,9,10];
    let oddarr = [];
    let evenarr = [];
       let result = 0;
    function foo(){   
 
    for(i = 0; i < arr.length; i++){
            if(arr[i] % 2 == 0){
                evenarr.push(arr[i])
            }else{
                oddarr.push(arr[i])
            }
        }
        result = 'zuyg array ' + evenarr + '     kent array ' + oddarr;
        return result ;
    }
    console.log(foo())
//6.
    let arr = [1,1,2,3,3,4,4,5,1,3,7,7,9,1];
    let resultarr = [];
    function uniquearray(){
        arr.sort((a, b) => a - b);
    for(i = 0; i < arr.length; i++){
        if((arr[i] !== arr[i-1]) && (arr[i] !== arr[i+1])){
            resultarr.push(arr[i])
        }
    }
    return resultarr;
}
console.log(uniquearray());
7.
let arr = ['cat', 'parrot', 'lizard'] ;
let arr1 = ['lizard', 'rat', 'cat', 'dog'] ;
function commonWord(arr, arr1){

for(i = 0; i < arr.length; i++){
    if(arr.includes(arr1[i])){
        console.log(arr1[i])
    }
}
return 0;
}
commonWord(arr, arr1);
8.
function elementInclude(arr1, arr2) {

let includesAll = arr1.every(element => {
  return arr2.includes(element);
});
if(includesAll){
    console.log('include all elements')
}else{
    console.log('does not inclde all  elements')
}
}
elementInclude(['pizza', 'cake', 'cola','vochxar'], ['pizza', 'cake', 'cola',]);

9.
let arr = ["b", 6, "a", "q", 7, 2];
let numberarr = [];
let stringarr = [];
for(i = 0; i < arr.length; i++){
    if(typeof arr[i] === 'number'){
        numberarr.push(arr[i])
    }else{
        stringarr.push(arr[i])
    }
}
console.log(numberarr.concat(stringarr))
11. xndir
let str = 'Hayastan';
let resultstr = '';
for(let i = str.length - 1; i >= 0; i--){
    resultstr += str[i];
}
console.log(resultstr);
let arr = [4, 32, 2, 5, 8];
let newArr = Math.max(...arr);
let newArr1 = Math.min(...arr);
let resultarr = [];
resultarr.push(newArr1);
resultarr.push(newArr);
console.log(resultarr);
var let = 10;
console.log(let);*/





//2- Shabat

//1-xndir
/*let arr = [2,5,15,50,15213]; 
function double(arr){ 
let resultarr = (arr.map((num) => num *2));
return resultarr;
}
console.log(double(arr));


//2-xndir
let arr = [1,2,3,4,5];
let resultarr = arr.map((num) => num + '');
console.log(resultarr);


//4-xndir
function namesOnly(arr){
    let resultarr = [];
    for(i = 0; i < arr.length; i++){
        resultarr.push(arr[i].name);
    }
    return resultarr;
}

console.log(namesOnly([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]));


//5-xndir
function makeStrings(arr){
    let resultarr = [];
    for(i = 0; i < arr.length; i++){
        if(arr[i].age > 19){
            resultarr.push(arr[i].name + 'Can go to the matrix')
            continue;
        }else{
            resultarr.push(arr[i].name + 'is under age')
        }
    }
    return resultarr;
}

console.log(makeStrings([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]));


//6- xndir
let arr = [ -1, -4, -12, -8,-3, -29, -150];
let result = [];
if(Array.isArray(arr)){
result = arr.filter((index) => index > 0).reduce((curr, elem) => curr + elem,0);
}
console.log(result);
//6-- xndir 2 tarberak
let arr = [ 1, -4, -12, 8,-3, -29, 150];
let result = 0;
for(i = 0; i < arr.length; i++) {
    if(arr[i] > 0){
        result = result + arr[i];
    }else if(!Array.isArray(arr)){
        return 0;
    }
}
console.log(result)

//7- xndir

let arr = [
    {
        name: 'John',
        age: 13
    },
    {
        name: 'Mark',
        age: 56,
    },
    {
        name: 'Rachel',
        age: 45,
    },
    {
        name: 'Nate',
        age: 67,
    },
    {
        name: 'Jeniffer',
        age: 65,
    }
];
   let arr1 = arr.map((index) => index.age).sort((a,b) => a -b);
function foo(){
let arr2 = [];
let finalarr = [];
for(i = 0; i < arr1.length; i++) {
    arr2.push(arr1[0]);
    arr2.push(arr1[arr1.length - 1]);
}
let result = arr2[arr2.length - 1] - arr2[2];
finalarr.push(arr2[0]);
finalarr.push(arr2[arr2.length - 1]);
finalarr.push(result);
return finalarr;
}
console.log(foo(arr1));

//8.xndir

let arr1 = [
    ['a','b','c'],
    ['c','d','f'],
    ['d','f','g']
    ];
    let arr = arr1.flat(Infinity);
    let counts = {};
arr.forEach((x) => {
  counts[x] = (counts[x] || 0) + 1;
});
console.log(counts); 


//9 xndir



const phoneCountryCodes = {
    '+374': 'Armenia',
    '+375': 'Somali',
    '+376': 'Russia',
    '+377': 'Hoktemberyan',
}

const arrOfObjects = [
    
    {
        name: 'sarah',
        age: 32,
        phoneNumber: '+374000000',
        relation: 'nelly'
    },
    {
        name: 'nelly',
        age: 11,
        phoneNumber: '+3750020000',
        relation: 'sarah'
    }
];

const referancetoSarahObject = arrOfObjects[0];
const referanceToNellyObject =  arrOfObjects[1];

for(i = 0; i < arrOfObjects.length; i++){
    switch (true){
        case arrOfObjects[i].phoneNumber.substring(0,4) == '+374': {
            arrOfObjects[i].country = 'Armenia';
            break;
        }
        case arrOfObjects[i].phoneNumber.substring(0,4) == '+375': {
            arrOfObjects[i].country = 'Somali';
            break;
        }
        case arrOfObjects[i].phoneNumber.substring(0,4) == '+376': {
            arrOfObjects[i].country = 'Russia';
            break;
        }
        case arrOfObjects[i].phoneNumber.substring(0,4) == '+377': {
            arrOfObjects[i].country = 'Hoktemberyan';
            break;
        }
    }
}
let uppercase = arrOfObjects[0].name.toUpperCase();
arrOfObjects[0].name = uppercase;
let uppercase1 = arrOfObjects[1].name.toUpperCase();
arrOfObjects[1].name = uppercase1;
arrOfObjects[0].relation = referanceToNellyObject;
arrOfObjects[1].relation = referancetoSarahObject;
console.log(arrOfObjects); 
*/

