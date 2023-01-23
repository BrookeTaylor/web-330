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
 * Create a class named Bill. Create four class properties: 
 * _beverages, _appetizers, _mainCourses, and _desserts and 
 * assign them an empty array (opening and closing brackets). 
 */

export class Bill {
    constructor(_beverages, _appetizers, _mainCourses, _desserts) {
        this._beverages = [];
        this._appetizers = [];
        this._mainCourses = []; 
        this._desserts = [];
    }
        
/**
 * Create a function named addBeverage() with one parameter 
 * of type beverage. In the body of the function push 
 * the beverage object to the _beverages array. 
 */
        addBeverage(beverage) {
            this._beverages.push(beverage);
        }


/**
 * Create a function named addAppetizer() with one parameter 
 * of type appetizer. In the body of the function push 
 * the appetizer object to the _appetizers array. 
 */
        addAppetizer(appetizer) {
            this._appetizers.push(appetizer);
        }





/**
 * Create a function named addMainCourse() with one parameter 
 * of type mainCourse. In the body of the function push 
 * the mainCourse object to the _mainCourses array. 
 */
        addMainCourse(mainCourse) {
            this._mainCourses.push(mainCourse);
        }


/**
 * Create a function named addDessert() with 
 * one parameter of type dessert.  In the body of 
 * the function push the dessert object to 
 * the _desserts array. 
 */
        addDessert(dessert) {
            this._desserts.push(dessert);
        }




/**
 * Create a function named getTotal().  In the body 
 * of the function create a variable named total 
 * and assign it a default value of 0.  
 * Next, using JavaScript’s built-in forEach() function, 
 * loop over each array (_beverages, _mainCourses, etc.,) 
 * and calculate the total using the price field of each 
 * object.  In the forEach() body, be sure to use
 * JavaScript’s parseFloat() function to ensure the 
 * calculated results are a float.  Finally, return 
 * the total variable and set its precisions 
 * to two decimal places. Export the class. 
 */

        getTotal() {

            let total = 0;

            let beverageTotal = this._beverages.forEach(function(beverage) {
                total += parseFloat(beverage.price);
            });

            let appetizerTotal = this._appetizers.forEach(function(appetizer) {
                total += parseFloat(appetizer.price);
            });

            let mainCourseTotal = this._mainCourses.forEach(function(mainCourse) {
                total += parseFloat(mainCourse.price);
            });

            let dessertTotal = this._desserts.forEach(function(dessert) {
                total += parseFloat(dessert.price);
            });

            return total.toFixed(2);

        }

}