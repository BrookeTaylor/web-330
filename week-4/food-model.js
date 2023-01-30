/*
============================================================
; Title: FoodModel class
; Author: Professor Krasso
; Date: 29 January 2023
; Description: An example of a class constructor being 
; exported. 
;============================================================
*/

// Create a class named FoodModel with a constructor. 
// Give the constructor three parameters: id, name, and calories. Export the class. 

export class FoodModel {
    constructor(id, name, calories) {
        this.id = id;
        this.name = name;
        this.calories = calories;
    }
}