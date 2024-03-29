class User {
  constructor({ firstName, lastName, email }) {
    (this.firstName = firstName),
      (this.lastName = lastName),
      (this.fullname = `${firstName} ${lastName}`),
      (this.email = email);
  }

  checkLastOnline() {
    console.log(`${this.fullName} was last online at ${Date.now()}`);
  }

  sendEmail() {
    console.log(`Email sent to ${email}`);
  }

  delete() {
    console.log("User removed");
  }
}

const user = new User({
  firstName: "John",
  lastName: "Doe",
  email: "john@doe.com",
});

const user2 = new User({
  firstName: "Jane",
  lastName: "Doe",
  email: "jane@doe.com",
});

console.log(user.delete === user2.delete); // true (they share the same function from the prototype)

/* const createUser = ({ firstName, lastName, email }) => ({
  firstName,
  lastName,
  fullName: `${firstName} ${lastName}`,
  email,
  checkLastOnline: () => {
    console.log(`${this.fullName} was last online at ${Date.now()}`);
  },
  sendEmail: () => {
    console.log(`Email sent to ${email}`);
  },
  delete: () => {
    console.log('User removed');
  },
});

const user = createUser({
  firstName: 'John',
  lastName: 'Doe',
  email: 'john@doe.com',
});

const user2 = createUser({
  firstName: 'Jane',
  lastName: 'Doe',
  email: 'jane@doe.com',
});

console.log(user.delete === user2.delete);
 */
