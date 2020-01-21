var firstName = prompt("First Name");
var lastName = prompt("Last name");
var age = prompt("Age please");
var height = prompt("height");
var petName = prompt("pet name");

//Four conditions
var nameCond = null;
var ageCond = null;
var heightCond =null ;
var petCond = null;

//Name condition
if(firstName[0] === lastName[0]){
    nameCond =true;
}
else{
    nameCond = false;
}

//Age condition
if(age > 20 && age < 30){
    ageCond = true;
}
else{
    ageCond  = false;
}

//Height condition
if(height >= 170){
    heightCond = true;
}
else{
    heightCond = false;
}

//pet name 
if(petName[petName.length-1] === "y"){
    petCond = true;
}
else{
    petCond = false;
}

//Check all condition are true
//no need to write nameCond === true because they all are in boolean.//

if(nameCond && ageCond && heightCond && petCond){
    console.log("Welcome Spy");
}
else{
    console.log("GoodBye!")
}