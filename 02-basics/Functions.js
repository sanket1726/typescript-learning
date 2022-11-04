function addNums(num1, num2) {
    return num1 + num2;
    //   return `${num1 + num2}`;
}
var logIn = function (name, password) {
    var isCredsCurrect = name === "sanket" && password === "1234";
    return isCredsCurrect;
};
var thorwError = function (errMsg) {
    throw new Error(errMsg);
};
// A function returning 'never' cannot have a reachable end point.
var checks = function (errMsg) {
    console.log("first");
};
var addition = addNums(1, 2);
logIn("sanket", "1234");
var check = checks("sss");
console.log(check);
thorwError("This is an error!");
