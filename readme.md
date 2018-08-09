## ES6 Tutorial

Start the tutorial [here](http://ccoenraets.github.io/es6-tutorial).

This branch tracks [here](https://ccoenraets.github.io/es6-tutorial/let/).

Replacing var with let potentially changes scopes within functions and can cause transpiled
scripts to break. This lesson demonstrates this and shows how to detect and fix instances.

This branch will show the following error in Chrome console when run:

`main.bundle.js:7 Uncaught ReferenceError: monthlyRate is not defined
     at calculateMonthlyPayment (main.bundle.js:7)
     at HTMLButtonElement.<anonymous> (main.bundle.js:15)`