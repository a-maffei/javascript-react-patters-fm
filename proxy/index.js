import { isValidEmail, isAllLetters } from "./validator.js";

const user = {
  firstName: "John",
  lastName: "Doe",
  username: "johndoe",
  age: 42,
  email: "john@doe.com",
};

const userProxy = new Proxy(user, {
  get: (target, property) => {
    return `${new Date()} | The value of ${property} is ${new Reflect.get(
      target,
      property
    )}`;
  },

  set: (target, property, value) => {
    if (property === "email") {
      if (!isValidEmail(value)) {
        throw new Error(`Please provide a valid email`);
      }
    }

    if (property === "age") {
      if (value < 18) {
        throw new Error(`User should be above 18 years old`);
      }

      if (typeof value !== "number") {
        throw new Error(`Please provide a valid age`);
      }
    }

    if (property === "username") {
      if (value.length < 3) {
        throw new Error(`Username should be longer`);
      }

      if (!isAllLetters(value)) {
        throw new Error(`You can only user letters`);
      }
    }

    return new Reflect.set(target, property, value);
  },
});
