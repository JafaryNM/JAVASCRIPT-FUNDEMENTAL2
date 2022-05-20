// YOU CAN DECLARE VARIABLE FIRST THEN USE IT

// ****function hoisting ***
calculateAge(2000)

function calculateAge(year){
    console.log(2022-year);
}

// APPLYING USING FUNCTION EXPRESSION

// retiremnt(1990) --> ERROR WILL RISE BECAUSE HOSTING
// NOT APPLIED IN FUNCTION EXPRESSION

var retiremnt=function(year){

    console.log(65-(2016-year));
}


// *** variable hoisting ***

// USING VARIABLE BEFORE DECLARED

//console.log(a) --> This will return undefined 
/**
var a=23;     //--> Global excution object context
console.log(a)


function foo(){
    var a=34;   // --> Function excution object context
    console.log(a);
}
foo();
console.log(a);


 * SCOPING CHAIN--> Explain where you can access the variables
 * Each function in  JavaScript Create Scope a place which variable are define acccessible
 * lexical Scoping --> is function which is lexically  within anather function get access to the outer function
 * 
 */



// SCOPING CHAIN

var a='Hello';
first();

function first(){
    var b='Hey';
    second();
    function second(){
        var c='Hi';
        console.log(a + " " + " " + b + " " +c )
    }

}

// Different between Excution Stack and Scoping Chain

var a='Hello';
 
first();

function first(){
    var b='Hi';
    second()
    function second(){
    var c=' Hey';
    third()
    }
function third(){
   var d='John';
    //console.log(c);
    console.log(a+b)
 }
}















