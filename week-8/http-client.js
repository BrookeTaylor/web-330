/*
============================================
; Title: Assignment 8.2 - WhatABook, Part 2 
; Author: Professor Krasso 
; Date: 02/21/2023
; Modified By: Brooks
; Description: 
============================================
*/ 

// Create a class named HttpClient 
// Export the class. 

export class HttpClient {

/**
 *
  In the body of the class create an async function 
  named get with two parameters: url and params.  
  Set the params parameter to a default empty string.
 * 
 */ 
  
  async get(url, params = "") {

  // Instantiate a new URL object, supplying it the 
  // url parameter and assign the results to the url parameter

  url = new URL(url);

/**
 * 
  Instantiate a new URLSearchParams object, supplying it the 
  params parameter and assigning it to the url.search property.   
 * 
 */

  url.search = new URLSearchParams(params);  

/**
 * 
  Create an object literal named res and using the fetch() API 
  passing in the url.toString() variable and specific the 
  request as a GET request.   
 *  
 */  

  let res = await fetch(url.toString(), {
    method: "GET",
  });

  // Return the res object literal as JSON. 

  return res.json();

    }

}