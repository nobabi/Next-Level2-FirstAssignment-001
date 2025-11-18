
//Problem 1:

function fomatValue(value:string| number |boolean):string|number|boolean{
    if(typeof value==='string')
    {
        return value.toUpperCase();
    }
    else if(typeof value==='number')
    {
        return value*10;
    }
    else{
        return !value;
    }
}
console.log(fomatValue('hello'));
console.log(fomatValue(5));
console.log(fomatValue(true));