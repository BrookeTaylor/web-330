/*
============================================================
; Title: Product class
; Author: Professor Krasso
; Date: 22 January 2023
; Description: An example of a class constructor being 
; exported. 
;============================================================
*/


// Create a JavaScript class named Product.  
// Give the class a constructor with two parameters: name and price.  
// Export the class.  

export class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}