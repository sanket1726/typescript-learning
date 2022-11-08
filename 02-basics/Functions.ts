function addNums(num1: number, num2: number): number {
  return num1 + num2;
  //   return `${num1 + num2}`;
}

const logIn = (name: string, password: string): boolean => {
  const isCredsCurrect = name === "sanket" && password === "1234";
  return isCredsCurrect;
};

const thorwError = (errMsg: string): never => {
  throw new Error(errMsg);
};

// A function returning 'never' cannot have a reachable end point.
const checks = (errMsg: string): void => {
  console.log("first");
};

const addition = addNums(1, 2);
logIn("sanket", "1234");
checks("sss");
thorwError("This is an error!");
