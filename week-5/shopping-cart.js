/*
============================================
; Title: Assignment 5.2 - Bob's Auto Repair 
; Author: Professor Krasso 
; Date: 02/05/2023
; Modified By: Brooks
; Description: 
============================================
*/ 

// Create a class named ShoppingCart and give it a constructor. 
// Export the ShoppingCart class. 

export class ShoppingCart {
    constructor() {
        
        // In the body of the class’s constructor create a property for products 
        // and assign it an empty array.  

        this.products = [];
    }

    // Create a function named count and return the length of the products array.  

    count() {
        return this.products.length;
    }


    // Create a function named add with a single parameter for a product object.  
    // In the body of the function, add the product object to the products array.
    
    add(product) {
        this.products.push(product);
    }

    // Using JavaScript Iterators, create an iterator and in the body use a for…of statement 
    //to loop over the products array.  Yield return each iterated product object.
    
    


    

// *************************   !!!  WORKING  !!!   ******************************


*[Symbol.iterator]() {
    for (let product of this.products) {
        return product
    }
}

// *************************   !!!  WORKING  !!!   ******************************



}