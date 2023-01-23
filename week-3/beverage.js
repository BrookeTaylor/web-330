/*
============================================================
; Title: Product class
; Author: Professor Krasso
; Date: 22 January 2023
; Description: An example of a class constructor being 
; exported. 
;============================================================
*/

/**
 * Create a JavaScript class named Beverage. 
 * Add an import statement for the product.js file and 
 * inherit the base classes properties by referencing the 
 * extends keyword. In the class's constructor add two 
 * parameters: name and price. Pass these parameters to 
 * the parent through the super() function.  
 */

import { Product } from "./product.js";

export class Beverage extends Product {
    constructor(name, price) {
        super(name, price);
    }
}