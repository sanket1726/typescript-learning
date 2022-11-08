// this file depicts InstanceOf and type predicates

interface Admin {
  name: string;
  isAdmin: boolean;
}

interface User {
  name: string;
  isAdmin: boolean;
}

function isAdminAccount(account: Admin | User) {
  if ("isAdmin" in account) {
    return account.isAdmin;
  }
}

type Fish = { swim: () => void };
type Bird = { fly: () => void };

// type casting a type is userd here...
function isFish(pet: Fish | Bird): pet is Fish {
  // pet as Fish is Explicit type casting
  return (pet as Fish).swim !== undefined;
}

function getFood(pet: Fish | Bird) {
  if (isFish(pet)) {
    pet;
    return "Fish food";
  } else {
    pet;
    return "Bird food";
  }
}
