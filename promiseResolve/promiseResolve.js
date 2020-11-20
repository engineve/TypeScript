"use strict";
const testPromise = new Promise((resolve, reject) => {
    resolve(10);
});
testPromise.then((result) => {
    console.log(result / 2); // 5
});
