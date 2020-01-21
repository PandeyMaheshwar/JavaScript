// //Problem:String times

// Given astring and a non-negative int n, return a larger string that is n copies of the original string.

// Example input and output:

// stringTimes("Hi", 2) = "HiHi"
// stringTimes("Hi", 3) = "HiHiHi"
// stringTimes("Hi", 1) = "Hi"

function stringTimes(str,n){
    var returnStr = "";
    var i = 0;
    while(i<n){
        returnStr += str;
        i++;
    }
    return returnStr;
}

//Problem 2: We want to make a row of bricks that is goal inches long. We have a number of small bricks (1 inches each) and big bricks (5 inches each). Return true if it is possible to make the goal by choosing from the given brick. 

//makeBrick(3, 1, 8) = true;
//makeBrick(3, 1, 9) = false;
//makeBrick(3, 2, 10) = true;
 
function makeBrick(small, big, goal){
 return goal%5 >= 0 && goal%5 - small<= 0 && small + 5*big >= goal;
}