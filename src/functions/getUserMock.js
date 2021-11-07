import { users } from "../mock/users";

export function getUserMock(email) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(users.find((user) => user.email === email));
    }, 2000);
  });
}

export function addUserMock(user) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      users.push(user);
      resolve();
    }, 2000);
  });
}
