# JavaScriptEssential Features

## Index

[Introduction](#introduction) 

[Background](#background)

[Java Script Loading Methods](#javascript-loading-methods) 

[Some Golden Rules](#some-golden-rules) 

[Data Types in JavaScript](#datatypes-in-javascript) 

[Functions and Objects](#functions-and-objects)




### Introduction 

**Wikipedia defination** : > Java script is a high level dynamic, untyped, and interpreted programming language strandardized in the  ECMAScript language specification. 

Basically these are the three distictively layer of code a webpage contains
 - CSS Rules   - Presentation Layer
 - HTML Markup - Content Layer 
 - JavaScript  - Interactive Layer/ Presentation Layer

**Simple Defination** : > A scripting language which provides way to handle event and dom manupulation dynamically. (Provide an option to interact with the webpage)

### Background
Originally called **Mocha** then renamed to **LiveScripts** and finally to **JavaScript** when Netscape and Sun Microsystems did a licence agreement that included a language ( Just for the sake of cash in "Java's" name and popularity, completely unrealted to the features or any code systax rules)

**JavaScript** Conforms to the ever-evolving ECMAScript standard ( ECMAScript itself is not a laguage but a standard which JavaScripts follows)

 - JavaScript is a weakly typed language
 - ECMAScript2015 is the new name for ECMAScript6 (ES6)
 - Browsers use ECMAScript to interpret JavaScript; so from your perspetive they are effectively the same thing.
 - So ECMAScript and JavaScript are the two sides of the same coin (One is a standard, a standard which Browsers uses to interpret language sytax; however other has adopted that standard to form a language)
 - ECMAScript 2015/ES6 needs a transpiler like babel to translate ES6 into ES5 and older versions for the sake of browser's support.
 - ECMAScript 2016 / ES7 is in development...

 **JQuery** is a Library of Javascript Functions. It introduces CS-like Syntax and several visual and UI enhancements. It simplifies the use of javascript in website.

 **Javascript Framework** - AngularJS/Angular2, React, Vue.js and so on are front-end application frameworks used to simplify the building of advanced interactive web-based applications.

 **Node.js** - A JavaScript platform built on browser runtime environment. Used to run advanced operations and applications on server and computers using JavaScript.

** Always add the javascript reference file after the end of <body> tag to avoid **JavaScript Render Blocking** as the rendering is blocked till the script is loaded and executed, which also most of the times result into "error" and the dom is yet to be rendered and any referencing in the JS file would throw an error.



#### JavaScript Loading methods 
    -  Right away Loading (Default)  - <script src="app.js"></script>
    -  Asynchronous Loading - <script src="app.js" asnyc></script>
    -  Deferred Loading - <script src="app.js" defer></script>



### Some Golden Rules

    -   JavaScript is **Case Sensitive**
    -   Use **camelCase**
    -   Whitespace Matters (to Humans - for the sake of READABLE)
    -   End each statement with a Semicolon (Not required but just as a Good Practice)
    -   User Comments Liberally ( it improve readabilities)
    

### Data Types in JavaScript

    -   Numeric
    -   String
    -   Boolean
    -   null (Intentional absence of a Object Value)
    -   undefined (Uninitialized Variable)
    -   symbol (Introduced in ES6)

**Objects** : JavaScript Objects have properties and methods. 
    Properties - Meta information about the object
    Method - Function that belongs to the object


### Functions and Objects

**Functions** 
    -   Functions can be used to segment off sections of our code to make it easier to manage
    -   To run repeated operations

**Three Types of Functions**
    -   Named Functions
    -   Anonymous Functions
    -   Immediately invoked function expressions (IIFE)