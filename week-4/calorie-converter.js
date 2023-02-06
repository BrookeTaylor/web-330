/*
============================================================
; Title: CalorieConverter class
; Author: Professor Krasso
; Date: 29 January 2023
; Description: An example of a class constructor being 
; exported. 
;============================================================
*/

// Add an import statement to the FoodModel.

import { FoodModel } from "./food-model.js";

// Create a class named CalorieConverter with a static variable 
// called data and populate it with 6 FoodModel objects. Export the class

export class CalorieConverter {
    static data = [
        new FoodModel(1007, "Egg", 78),
        new FoodModel(1008, "Apple", 95),
        new FoodModel(1009, "Hamburger", 354), 
        new FoodModel(1010, "Fries", 400), 
        new FoodModel(1011, "Banana", 105), 
        new FoodModel(1012, "Soda", 150), 
    ];




    /**
     * Create a static function named find with a single string parameter.  
     * Using JavaScript’s built-in filter function, return a new array of data 
     * with the objects matching the parameter string.  Use the FoodModel 
     * name field to compare the parameter string value against.
     */


static find(string) {
    // fixed to includes()
    return this.data.filter((food) => food.name.toLowerCase().includes(string));
}

};