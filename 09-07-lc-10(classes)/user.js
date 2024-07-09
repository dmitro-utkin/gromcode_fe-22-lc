// export class User extends Array{
export class User {
  #isAdmin = false;

  constructor(id, firstName, lastName) {
    // super();
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;

    // console.log('this', this);
  }

  // get getId() {
  //   return this.id;
  // }

  get getIsAdmin() {
    return this.#isAdmin;
  }

  set setIsAdmin(value) {
    // console.log('setter worked')

    if (typeof value !== 'boolean') {
      console.error('value must be boolean');
      return;
    }
    this.#isAdmin = value;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}
