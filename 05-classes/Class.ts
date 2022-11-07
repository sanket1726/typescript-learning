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
  constructor(
    public name: string,
    public email: string,
    private password: string,
    protected id: string = ""
  ) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.id = Math.random().toString();
  }

  get getDetails(): string {
    return `${this.name} ${this.email}`;
  }

  //   Property 'setPassword' implicitly has type 'any', because its set accessor lacks a parameter type annotation.
  //   A 'set' accessor cannot have a return type annotation.
  set setPassword(password: string) {
    this.password = password;
  }

  get getPassword(): string {
    return this.password;
  }
}

let user1 = new User("Sanket", "sanket@gmail,com", "ssss");
console.log(user1.getDetails);
user1.setPassword = "newPassword";
console.log(user1.getPassword);

// export {};
