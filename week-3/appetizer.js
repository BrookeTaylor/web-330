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
 * Add an import statement for the Product object. 
 * Create a class named Appetizer and inherit the 
 * Product object. In the constructor of the class 
 * add two parameters (name and price) and pass 
 * them to the parent class through the super() 
 * function. Export the class. 
 */

import { Product } from "./product.js";

export class Appetizer extends Product {
    constructor(name, price) {
        super(name, price);
    }
}