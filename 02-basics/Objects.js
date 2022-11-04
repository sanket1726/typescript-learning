"use strict";
exports.__esModule = true;
var creds = {
    name: "Sanket",
    pass: "1234",
    isPaid: true
};
function logIn(_a) { }
function createCourse(cName, price, isPaid) {
    return { name: cName, price: price, isPaid: isPaid };
}
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
    return arguments[0].name;
}
logIn(creds);
var courseDetails = createCourse("TS", 100, true);
console.log(courseDetails);
console.log(createUser({ name: "Sanket", isPaid: true }));
