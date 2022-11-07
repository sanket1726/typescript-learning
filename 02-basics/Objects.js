"use strict";
exports.__esModule = true;
var creds = {
    _name: "trial",
    name: "Sanket",
    pass: "1234",
    isPaid: true
};
function logIn(obj) {
    return "user ".concat(obj.name, " is a ").concat(obj.isPaid ? "Paid" : "free", " user");
}
console.log(logIn(creds));
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
    return arguments[0].name;
}
console.log(createUser({ name: "Sanket", isPaid: true }));
function createCourse(cName, price, isPaid) {
    return { name: cName, price: price, isPaid: isPaid };
}
var courseDetails = createCourse("TS", 100, true);
console.log(courseDetails);
