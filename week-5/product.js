/*
============================================
; Title: Assignment 5.2 - Bob's Auto Repair 
; Author: Professor Krasso 
; Date: 02/05/2023
; Modified By: Brooks
; Description: 
============================================
*/ 

// Create a class named Product with a constructor and two parameters: name and price 
// Export the Product class.

export class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;

        // In the body of the constructor set the class properties to the parameters 
        // and add a new property for id.  Generate a new random value and assign it 
        // to the id field   
        
        this.id = Math.random().toString(16).slice(2);
    }
}