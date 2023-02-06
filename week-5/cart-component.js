/*
============================================
; Title: Assignment 5.2 - Bob's Auto Repair 
; Author: Professor Krasso 
; Date: 02/05/2023
; Modified By: Brooks
; Description: 
============================================
*/ 

// Create a new class named CartComponent that extends 
// JavaScripts HTMLElement object.

class CartComponent extends HTMLElement {
    
    // Give the class a constructor and call super() 
    // function for the HTMLElement parent object.
    
    constructor() {
        super();
    }

    // Add a function named connectedCallback() and 
    // set the innerHTML to a string for the font-awesome shopping-cart icon.
    connectedCallback() {
        this.innerHTML = '<i id="cartIcon" class="fa fa-shopping-cart"></i> (<span id="cart-count"></span>)';
    }
    
}

// Outside of the class declaration, call the customElements.define() function 
// and pass-in the string value cart-component and the CartComponent class.  

customElements.define("cart-component", CartComponent);