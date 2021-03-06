// tsc --init  --> tsconfig.json 
var numElement = document.getElementById('num'); // type casting, HTMLInputElement is general type. let typescript know this element has a value
var buttonElement = document.querySelector('button'); // ! : we know the statement in front is not null // can be null, strictNullChecks by tsconfig.json
;
function convert(num) {
    return +num;
}
function display(itemObj, item1Obj) {
    console.log(itemObj.val, item1Obj.val);
}
buttonElement.addEventListener('click', function () {
    var num = numElement.value; // HTMLInputElement.value: string
    var result = convert(num);
    console.log(result);
    display({ val: 5 }, { val: 10 });
});
