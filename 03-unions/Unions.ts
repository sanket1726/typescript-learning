// main idea behind using unions is that we can make typs more flexible depending on the use case.
let price: number | string = 30;
price = "25";

type User = {
  userName: string;
  id: number;
};

type Admin = {
  userName: string;
  id: number;
};

let sanket: User | Admin;

const numArray: number[] = [1, 2, 3, 4, 5];
const strArray: string[] = ["a", "b", "c", "d", "e", "f"];
const mixArray: (number | string)[] = [100, 125, "52"];
