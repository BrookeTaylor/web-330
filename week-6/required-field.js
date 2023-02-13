/*
============================================
; Title: Assignment 6.2 - Future Value Calculator 
; Author: Professor Krasso 
; Date: 02/12/2023
; Modified By: Brooks
; Description: 
============================================
*/ 

// Create a class named RequiredField. 
// Export the class. 

export class RequiredField {
    constructor(name, field) {
        this.name = name;
        this.field = field; 
    }

    // Create a function named validate.  In the body of the function 
    // return Boolean(this.field), which will return true if this.field 
    // is a string value and false if not. 

    validate() {
        return Boolean(this.field);
    }

    // Create a function named getMessage() and return 
    // the string message “<name> is a required field.”  

    getMessage() {
        return this.name + " is a required field.";
    }
}