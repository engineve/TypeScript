"use strict";
// tsc --init  --> tsconfig.json 
var numElement = document.getElementById('num'); // type casting, HTMLInputElement is general type. let typescript know this element has a value
var buttonElement = document.querySelector('button'); // ! : we know the statement in front is not null // can be null, strictNullChecks by tsconfig.json
// const buttonElement: HTMLButtonElement
function convert(num) {
    return +num;
}
buttonElement.addEventListener('click', function () {
    var num = numElement.value; // HTMLInputElement.value: string
    var result = convert(num);
    console.log(result);
});
