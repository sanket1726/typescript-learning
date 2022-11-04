const creds = {
  name: "Sanket",
  pass: "1234",
  isPaid: true,
};

type myObject = { name: string; pass: string; isPaid: boolean };

function logIn(obj: myObject): string {
  return `user ${obj.name} is a ${obj.isPaid ? "Paid" : "free"} user`;
}

logIn(creds);

function createCourse(
  cName: string,
  price: number,
  isPaid: boolean
): { name: string; price: number; isPaid: boolean } {
  return { name: cName, price: price, isPaid: isPaid };
}

function createUser({ name: string, isPaid: boolean }) {
  return arguments[0].name;
}

const courseDetails = createCourse("TS", 100, true);
console.log(courseDetails);

console.log(createUser({ name: "Sanket", isPaid: true }));

export {};
