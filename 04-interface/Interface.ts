// Interface vs Types    =====> interfaces can be reopened but types can not.
interface User {
  userName: string;
  address: {
    addressLine1: string;
    addressLine2: string;
    pinCode: number;
  };
  startTrial(): string;
  getCoupen(couponCode: string): number;
}

// REOPENING AN INTERFACE
interface User {
  token: string;
}

let sanket: User = {
  userName: "Sanket",
  address: {
    addressLine1: "Rui",
    addressLine2: "Kolhapur",
    pinCode: 416116,
  },
  startTrial: () => {
    return "hello User. Your trial is activated.";
  },
  getCoupen: (name: "MYCODE") => {
    return 10;
  },
  token: "KSKJLAD3KLWEKR3LKEFWKLFWEJKL3RKL",
};

// Extending and Interface.s
interface Admin extends User {
  isAdmin: boolean;
}

const adminUser: Admin = {
  isAdmin: true,
  userName: "Sanket",
  address: {
    addressLine1: "Rui",
    addressLine2: "Kolhapur",
    pinCode: 416116,
  },
  startTrial: () => {
    return "hello User. Your trial is activated.";
  },
  getCoupen: (name: "MYCODE") => {
    return 10;
  },
  token: "KSKJLAD3KLWEKR3LKEFWKLFWEJKL3RKL",
};
