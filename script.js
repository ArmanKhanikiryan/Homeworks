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
