// this file depicts InstanceOf and type predicates
function isAdminAccount(account) {
    if ("isAdmin" in account) {
        return account.isAdmin;
    }
}
// type casting a type is userd here...
function isFish(pet) {
    // pet as Fish is Explicit type casting
    return pet.swim !== undefined;
}
function getFood(pet) {
    if (isFish(pet)) {
        pet;
        return "Fish food";
    }
    else {
        pet;
        return "Bird food";
    }
}
