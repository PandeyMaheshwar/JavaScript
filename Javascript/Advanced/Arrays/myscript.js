// Creating Array
// var country1 = ["USA"];
// var country2 = ["India"]

//instead
var countries = ["USA", "India"];

//Can take different datatype
var mixed = ["USA", 10, true];

//method
//push
countries.push("UK");

//pop
countries.pop("UK");

//Iteration
//for loop
var arr = ["A", "B", "C"];
for(i=0; i<arr.length; i++){
    console.log(arr[i])
}

//function
function addAwesome(name){
    console.log(name+" is awesome!");
}

addAwesome("django");

var topics = ["python","django","science"]
 topics.forEach(addAwesome);