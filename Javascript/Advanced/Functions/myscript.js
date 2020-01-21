//function name(parameter 1, parameter 2){
    //code to be executed
//}

function hello(){
    console.log("Hello World");
}

//function with parameter
function helloYou(name){
    console.log("Hello " + name);
}

//function with more than one parameter
//this will not work if we add string to the number like '2' +2 =22
//so need to check type
function addNum(num1,num2){
    console.log(num1+num2);
}

//return
function multiply(numInput){
    var result = numInput * 5;
    return result; 
}