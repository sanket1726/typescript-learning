// class User {
//   public name: string;
//   public email: string;
//   private password: string;
//   protected id: string;
//   constructor(name: string, email: string, password: string) {
//     this.name = name;
//     this.email = email;
//     this.password = password;
//     this.id = Math.random().toString();
//   }
//   getDetails(): string {
//     return `${this.name} ${this.email}`;
//   }
// }
class User {
    constructor(name, email, password, id = "") {
        this.name = name;
        this.email = email;
        this.password = password;
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.id = Math.random().toString();
    }
    get getDetails() {
        return `${this.name} ${this.email}`;
    }
    set setPassword(password) {
        this.password = password;
    }
    get getPassword() {
        return this.password;
    }
}
let user1 = new User("Sanket", "sanket@gmail,com", "ssss");
console.log(user1.getDetails);
user1.setPassword = "newPassword";
console.log(user1.getPassword);
// export {};
