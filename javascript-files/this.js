/* 
    ! READ THIS!!!
    ! Please Install "Better Comments" extension for a much
    ! better viewing experience

    Legend:
    * - Notes
    ! - Important Notes or Codes
    ? - Codes & other code related notes
    todo - Topic title
*/



//todo: explanation of "this" in JavaScript
 
/*    
  todo: 1. The mystery of this

  * From a background like Java, PHP or other standard language, "this" is the instance of the current object in the class method. "this" cannot be used outside the method and such a simple approach does not create confusion.

  * In JavaScript the situation is different: this is the context of a function invocation (a.k.a. exection). The language has 4 function invocation types:

  ? function invocation: alert('Hello World!')
  ? method invocation: console.log('Hello World!')
  ? constructor invocation: new RegExp('\\d')
  ? indirect invocation: alert.call(undefined, 'Hello World!')

  ! The key to understanding "this" keyword is having a clear view of "function invocation" and how it impacts the context.

  * This article focuses on the invocation explanation, how the function invocation influences "this" and demonstrates the common pitfalls of identifying the value of "this".

  * Before starting, let's familiarize with a couple of terms:

    ! "Invocation" of a function is executing the code that makes the body of a function, or simply calling the function. For example parseInt function invocation is parseInt('15').

    ! "Context" of an invocation is the value of this within function body.

    ! "Scope" of a function is the set of variables and functions accessible within a function body.
*/

/* 
  todo: 2. Function Invocation

  * Function invocation is performed when an expression that evaluates to a function object is followed by an open parenthesis (, a comma separated list of arguments expressions and a close parenthesis ). For example parseInt('18').

  * A simple example of function invocation:
  
    ? function hello(name) {
    ?   return 'Hello ' + name + '!';
    ? }

    * Function Invocation
    ? const message = hello('World');

  * hello('World') is a function invocation: hello expression evaluates to a function object, followed by a pair of parenthesis with the 'World' argument.

  ! Function invocation expression cannot be a property accessor obj.myFunc(), which creates a method invocation. For example [1,5].join(',') is not a function invocation, but a method call. Please remember the distinction between them.

  * A more advanced example is the IIFE (immediately-invoked function expression):

    * IIFE
    ? const message = (function(name) {
    ?   return 'Hello ' + name + '!';   
    ? })('World');

  * IIFE is a function invocation too: the first pair of parenthesis (function(name) {...}) is an expression that evaluates to a function object, followed by the pair of parenthesis with 'World' argument: ('World').




  todo: 2.1. "this" in a Function Invocation
  
    ! "this" is the (global object) in a function invocation.

    ! The global object is determined by the execution environment. In a browser, the global object is window object.

    * In a function invocation, the execution context is the global object.

    * Let's check the context in the following function:

      ? function sum(a, b) {
      ?   console.log(this === window);  // => true
      ?   this.myNumber = 20;            // add 'myNumber' property to global object
      ?   return a + b;
      ? }

      * sum() is invoked as a function
      * this in sum() is a global object (window)
      ? sum(15, 16);                     // => 31
      ? window.myNumber;                 // => 20

    * At the time sum(15, 16) is called, JavaScript automatically sets this as the global object (window in a browser).
  
    * When "this" is used outside of any function scope (the topmost scope: global execution context), it also equals to the global object:

      ? console.log(this === window);    // => true

      ? this.myString = 'Hello World!';
      ? console.log(window.myString);    // => 'Hello World!'


      ? <!-- In an html file -->
      ? <script type="text/javascript">
      ?   console.log(this === window);  // => true
      ? </script>




  todo: 2.2. "this" in a Function Invocation, "strict mode"

    ! "this" is "undefined" in a function invocation in "strict mode"

    * The strict mode is available starting ECMAScript 5.1, which is a restricted variant of JavaScript. It provides better security and stronger error checking.

    ! To enable the strict mode place the directive 'use strict' at the top of a function body.

    * Once enabled, the strict mode affects the execution context, making this to be undefined in a regular function invocation. The execution context is not the global object anymore, contrary to above case 2.1.

    * An example of a function called in strict mode:
      
      ? function multiply(a, b) {
      !   'use strict';                       // enable the strict mode
      ?   console.log(this === undefined);    // => true
      ?   return a * b; 
      ? }

      * multiply() function invocation with strict mode enabled
      * "this" in multiply() is undefined
      ? multiply(2, 5);                       // => 10

    * When multiply(2, 5) is invoked as a function in strict mode, this is undefined.

    * The strict mode is active not only in the current scope but also in the inner scopes (for all functions declared inside):

      ? function execute() {
      !   'use strict';
      ? 
      ?   function concat(str1, str2) {
      !     // the strict mode is enabled too
      ?     console.log(this === undefined);  // => true
      ?     return str1 + str2;  
      ?   }
      ?
      !   // concat() is invoked as a function in strict mode
      !   // "this" in concat() is undefined
      ?   concat('Hello', ' World!');         // => "Hello World!"
      ? }
      ?
      ? execute();

    * 'use strict' sits at the top of execute body, enabling the strict mode within its scope. Because concat is declared within the execute scope, it inherits the strict mode. And the invocation concat('Hello', ' World!') makes this to be undefined.

    * A single JavaScript file may contain both strict and non-strict modes. So it is possible to have different context behavior in a single script for the same invocation type:

      ? function nonStrictSum(a, b) {
      !   // non-strict mode
      ?   console.log(this === window);       // => true
      ?   return a + b; 
      ? }
      ?
      ? function strictSum(a, b) {
      !   'use strict'; 
      !   // strict mode is enabled
      ?   console.log(this === undefined);    // => true
      ?   return a + b;
      ? }

      * nonStrictSum() is invoked as a function in non-strict mode
      * "this" in nonStrictSum() is the window object
      ? nonStrictSum(5, 6);                   // => 11
      
      * strictSum() is invoked as a function in strict mode
      * "this" in strictSum() is undefined
      ? strictSum(8, 12);                     // => 20

  


  todo: 2.3. Pitfall: "this" in an inner function
    
    ! A common trap with the function invocation is thinking that "this" is the same in an inner function as in the outer function.

    ! The context of the inner function (except arrow function) depends only on its own invocation type, but not on the outer function's context.

    * To make "this" have a desired value, modify the inner function's context with indirect invocation (using .call() or .apply(), see 5.) or create a bound function (using .bind(), see 6.).

    * The following example is calculating a sum of two numbers:

      ? const numbers = {
      ?   numberA: 5,
      ?   numberB: 10,
      ?
      ?   sum: function() {
      ?     console.log(this === numbers);    // => true
      ?     
      ?     function calculate() {
      ?       // this is window or undefined in strict mode
      !       console.log(this === numbers);  // => false
      ?       return this.numberA + this.numberB;
      ?     }
      ?   
      ?     return calculate();
      ?   }
      ? };
      ?
      ? numbers.sum();  // NaN or throws TypeError in strict mode

    ! numbers.sum() is a method invocation on an object (see 3.) thus this equals number.calculate() function is defined inside sum(), so you might expect to have this as numbers object in when invoking calculate() too.

    ! calculate() is a function invocation (but not method invocation), thus here this is the global object window (case 2.1.) or undefined in strict mode (case 2.2.). Even if the outer function numbers.sum() has the context as numbers object, it doesn't have influence here.

    ! The invocation result of numbers.sum() is NaN (or an error is thrown TypeError: Cannot read property 'numberA' of undefined in strict mode). Definitely not the expected result 5 + 10 = 15. All because calculate() is not invoked correctly.

    * To solve the problem, calculate() function must execute with the same context as the numbers.sum() method, to access this.numberA and this.numberB properties.

    * One solution is to change manually the context of calculate() to the desired one by calling calculate.call(this) (an indirect invocation of a function, see section 5.):

      ? const numbers = {
      ?   numberA: 5,
      ?   numberB: 10,
      ?   sum: function() {
      ?     console.log(this === numbers);       // => true
      ? 
      ?     function calculate() {
      ?       console.log(this === numbers);     // => true
      ?       return this.numberA + this.numberB;
      ?     }
      ?
      ?     // use .call() method to modify the context
      ?     return calculate.call(this);
      ?   }
      ? };
      ? numbers.sum();                           // => 15
    
    * calculate.call(this) executes calculate() function as usual, but additionally modifies the context to a value specified as the first parameter.

    * Now this.numberA + this.numberB is same as numbers.numberA + numbers.numberB. The function returns the expected result 5 + 10 = 15.

    * Another solution, slightly better, is to use an arrow function:

      ? const numbers = {
      ?   numberA: 5,
      ?   numberB: 10,
      ?   sum: function(){
      ?     console.log(this === numbers);       // => true
      ?
      !     const calculate = () => {
      !       console.log(this === numbers);     // => true
      !       return this.numberA + this.numberB;
      !     }
      ?     
      ?     return calculate();
      ?   }
      ? };
      ?
      ? numbers.sum();                           // => 15

    * The arrow function resolves "this" lexically, or, in other words, uses "this" value of numbers.sum() method
*/





/* 
  todo: 3. Method Invocation

    * A method is a function stored in a property of an object. For example:

      ? const myObject = {
      ?   // helloMethod is a method
      ?   helloMethod: function() {
      ?     return 'Hello World!';
      ?   }
      ? };
      ? 
      ? const message = myObject.helloMethod();

    * helloMethod is a method of myObject. Use a property accessor myObject.helloMethod to access the method.

    ! Method invocation is performed when an expression in a form of property accessor that evaluates to a function object is followed by an open parenthesis (, a comma separated list of arguments expressions and a close parenthesis ).

    ! Recalling the previous example, myObject.helloMethod() is a method invocation of helloMethod on the object myObject.

    ! More examples of method calls are: [1, 2].join(',') or /\s/.test('beautiful world').

    


*/





