/*
============================================
; Title: Assignment 6.2 - Future Value Calculator 
; Author: Professor Krasso 
; Date: 02/12/2023
; Modified By: Brooks
; Description: 
============================================
*/ 

// Create a class named FloatMaxField. 
// Export the class. 

export class FloatMaxField {
    constructor(name, field, max) {
        this.name = name;
        this.field = field;
        this.max = max;
    }

    // Create a function named validate.  
    // In the body of the function parseFloat the field value 
    // and return true if the value is less than the max parameter.  
    
    // Otherwise, return false. 
    
    validate() {
        if (parseFloat(this.field) < this.max) {
            return true;
        } else {
            return false;
        }
    }

    // Create a function named getMessage() and return 
    // the string message “<name> must be less than <max>.  You entered <field>” 

    getMessage() {
        return this.name + " must be less than " + this.max + ".  You entered " + this.field + "."; 
    }

}