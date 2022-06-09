// function greet ( greeting : string , name : string ) : string 
// {
//     return greeting + " " + name ;
// }
// console.log(greet("welcome" ,"simran"))
//optional parameter
// function greet ( greeting : string , name? : string ) : string 
//  {
//     return greeting + " " + name ;
//  }
//  console.log(greet("welcome" ,"simran"));
// console.log(greet("welc")) 
//default parameter
function greet(name, greeting) {
    if (greeting === void 0) { greeting = "heyaa "; }
    return greeting + " " + name;
}
console.log(greet("sim"));
console.log(greet("sim", "welcome"));
console.log(greet("simsim"));
