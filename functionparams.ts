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
function greet ( name : string , greeting: string = "heyaa ") : string 
 {
    return greeting + " " + name ;
 }

 console.log(greet("sim")); //return heya sim
 console.log(greet("sim" , "welcome")); //returns welcome sim
 console.log(greet("simsim")); //returns heya simsim
