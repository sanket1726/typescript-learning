type myObject = { name: string; pass: string; isPaid: boolean };
const creds = {
  //   _name: "trial",
  name: "Sanket",
  pass: "1234",
  isPaid: true,
};

function logIn(obj: myObject): string {
  return `user ${obj.name} is a ${obj.isPaid ? "Paid" : "free"} user`;
}

console.log(logIn(creds));

function createUser({ name: string, isPaid: boolean }) {
  return arguments[0].name;
}
console.log(createUser({ name: "Sanket", isPaid: true }));

function createCourse(
  cName: string,
  price: number,
  isPaid: boolean
): { name: string; price: number; isPaid: boolean } {
  return { name: cName, price: price, isPaid: isPaid };
}

const courseDetails = createCourse("TS", 100, true);
console.log(courseDetails);

// epic for objects

type cardDate = { cardDate: string };
type cardNumber = { cardNumber: string };

type cardDetails = cardNumber & cardDate & { cvv: number };

const cDetails: cardDetails = {
  cardDate: "12/25",
  cardNumber: "2351 1245 7854 9658",
  cvv: 123,
};
cDetails.cvv = 458;

export {};
