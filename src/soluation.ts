
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
// console.log(fomatValue('hello'));
// console.log(fomatValue(5));
// console.log(fomatValue(true));

// Problem 1:
function getLength(value:string | any[]):number{
    if(typeof value==='string')
    {
        return value.length;
    }
    else if(Array.isArray(value))
    {
        return value.length;
    }
    return 0;
}
// console.log(getLength('typescript'));
// console.log(getLength([10, 20, 30, 40]));

//Problem 3:
class Person{
    name:string;
    age:number;
    constructor(name:string,age:number)
    {
        this.name=name;
        this.age=age;
    }
    getDetials():string{
        return `Name: ${this.name}, Age ${this.age}`;
    }
}
//  const person1 = new Person('John Dos',30);
//  console.log(`'${person1.getDetials()}'`);
//  const person2 = new Person('Alice',25);
//  console.log(`'${person2.getDetials()}'`);
