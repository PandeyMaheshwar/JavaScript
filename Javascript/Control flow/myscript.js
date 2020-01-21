//Practice 1 //
//If-else -loop//
var hot = false
var temp = 40
if(temp>80){
    console.log("hot");
}
else if(temp<=80 && temp>=50){
    console.log("Average")
}
else if(temp <50 && temp>=32){
    console.log("cold");
}
else{
    console.log("very cold")
}

//While-loop//

var x = 0
while(x<5){
    console.log("x is currently: "+x);

    if(x===3){
        console.log("x is equal to three");
        break;
    }
    console.log("x is still less than 5, adding 1 to x");

    x=x+1;
}

//write a while loop that prints out only even numbers from 1 to 10

var x = 1;
while(x<11){
    if(x%2===0){
        console.log(x);
}
x = x+1;
}

//For Loop//

for( var i=0; i<5; i++){
    console.log ("number is " + i)
}

var word = "ABABABABAB"
for(i = 0; i< word.length; i= i+2){
    console.log(word[i]);
}0