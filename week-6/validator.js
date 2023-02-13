/*
============================================
; Title: Assignment 6.2 - Future Value Calculator 
; Author: Professor Krasso 
; Date: 02/12/2023
; Modified By: Brooks
; Description: 
============================================
*/ 

// Add import statements for RequiredField, FloatField, FloatMinField, FloatMaxField. 

import { RequiredField } from "./required-field.js";
import { FloatField } from "./float-field.js";
import { FloatMinField } from "./float-min-field.js";
import { FloatMaxField } from "./float-max-field.js";



export class Validator {


    // Create two class properties: validators and messages.  Assign each of the properties an empty array. 
    
    validator = [];
    messages = [];

    // Create a class constructor with two parameters: name and field.  

    constructor(name, field) {
        this.name = name;
        this.field = field;
    }

/**
 * Create a function named addRequiredField() 
 * and in the body push a new instance of the RequiredField 
 * class to the validators array using the name and field as parameters. 
 */

    addRequiredField() {
        this.validator.push(new RequiredField(this.name, this.field));
    }
    

/**
 * Create a function named addRequiredFloatField() 
 * and in the body of the function push a new instance of the FloatField 
 * class to the validators array using the name and field as parameters. 
 */

    addRequiredFloatField() {
        this.validator.push(new FloatField(this.name, this.field));
    }
    

/**
 * Create a function named addFloatMinField() 
 * with a single parameter for min.  In the body of the function 
 * push a new instance of the FloatMinField class to the 
 * validators array using the name, field, and min as parameters. 
 */

    addFloatMinField(min) {
        this.validator.push(new FloatMinField(this.name, this.field, min));
    }
    

/**
 * Create a function named addFloatMaxField() 
 * with a single parameter for max.  In the body of the function 
 * push a new instance of the FloatMaxField class to the 
 * validators array using the name, field, and max as parameters.    
 */

    addFloatMaxField(max) {
        this.validator.push(new FloatMaxField(this.name, this.field, max));
    }



    // Create a function named validate() 

    validate() {

        for (let field of this.validator) {
            if (!field.validate()) {
                this.messages.push(field.getMessage());
                return false;
            }
        }

        return true;

    }



} 