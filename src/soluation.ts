
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

// Problem 2:
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
 

// Problem 4
type Item= {
    title :string;
    rating: number;
}
function filterByRating(items: Item[]): Item[]
{
    return items.filter(item=>item.rating>=4)
}
const books = [

{title:'Book A',rating: 4.5},
{title:'Book B',rating: 3.2},
{title:'Book C',rating: 5.0},
]
 
//Problem 05:

type User={
    id:number;
    name:string;
    email: string;
    isActive:boolean;
}
const users = [
  { id: 1, name: 'Rakib', email: 'rakib@example.com', isActive: true },
  { id: 2, name: 'Asha', email: 'asha@example.com', isActive: false },
  { id: 3, name: 'Rumi', email: 'rumi@example.com', isActive: true },
];
function filterActiveUsers(users:User[]):User[] {
    return users.filter(user=>user.isActive==true);
}
 
 
//Problem 6:
interface Book {
title :string
author :string
publishedYear :number
isAvailable :boolean
}
function printBookDetails(book:Book):void{
    const availability =book.isAvailable?'Yes':'No';
    console.log(`Title: ${book.title}, Author: ${book.author}, Publish: ${book.publishedYear}, Available: ${availability}`);
}
const myBook: Book = {
  title: 'The Great Gatsby',
  author: 'F. Scott Fitzgerald',
  publishedYear: 1925,
  isAvailable: true,
};

 
// Problem 7:
function getUniqueValues(array1:(string|number)[],array2:(string |number)[])
{
    return [...new Set([...array1,...array2])];
}
const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
 

//Problem 8:
type Product = {
  name: string;
  price: number;
  quantity: number;
  discount?: number; 
};

// Function to calculate total price
function calculateTotalPrice(products: Product[]): number {
  return products
    .map(product => {
      const basePrice = product.price * product.quantity;
      const discountRate = product.discount ? product.discount / 100 : 0;
      return basePrice * (1 - discountRate);
    })
    .reduce((sum, current) => sum + current, 0);
}

// Sample Input
const products: Product[] = [
  { name: 'Pen', price: 10, quantity: 2 },
  { name: 'Notebook', price: 25, quantity: 3, discount: 10 },
  { name: 'Bag', price: 50, quantity: 1, discount: 20 },
];


