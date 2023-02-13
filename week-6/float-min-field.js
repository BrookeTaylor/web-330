/*
============================================
; Title: Assignment 6.2 - Future Value Calculator 
; Author: Professor Krasso 
; Date: 02/12/2023
; Modified By: Brooks
; Description: 
============================================
*/ 

// Create a class named FloatMinField. 
// Export the class.

export class FloatMinField {
    constructor(name, field, min) {
        this.name = name;
        this.field = field;
        this.min = min;
    }

/**
 * Create a function named validate.  
 * In the body of the function parseFloat the 
 * field value and return true if the value 
 * is greater than min.  
 * 
 * Otherwise, return false. 
 */

validate() {
    if (parseFloat(this.field) > this.min) {
        return true;
    } else {
        return false;
    }
}

/**
 * Create a function named getMessage() 
 * and return the string message “<name> must be 
 * more than <min>.  You entered <field>”  
 */

getMessage() {
    return this.name + " must be more than " + this.min + ".  You entered " + this.field + ".";
}

}
