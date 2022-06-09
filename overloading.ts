function add( a:number , b : number ) : number ;

function add( a: string , b : string ) : string ;

function add( a: any , b : any ) : any
{
    return a + b ;

}

console.log(add(20 , 50)); //returm 70 
console.log(add("hello" ,"sim")) //return hello sim

//overloading means many finction with same name but has parametrs of diff data type