import { v4 as uuidv4 } from "uuid";

let users = [];

export const getUsers = (req, res) => {
  res.send(users);
};

export const insertUser = (req, res) => {
  const user = req.body;

  users.push({ ...user, id: uuidv4() });

  res.send(`User with the name ${user.firstName} added to the database!`);
};

export const getUser = (req, res) => {
  const { id } = req.params;

  const foundUser = users.find((user) => user.id === id);

  res.send(foundUser);
};

export const deleteUser = (req, res) => {
  const { id } = req.params;

  users = users.filter((user) => user.id !== id);

  res.send(`User with the id ${id} deleted from the database`);
};

export const updateUser = (req, res) => {
  const { id } = req.params;
  const { firstName, lastname, age } = req.body;

  const user = users.find((user) => user.id === id);

 /*  if (firstName) {
    user.firstName = firstName;
  } 
    if (lastname) {
    user.lastname = lastname;
  }
  if (age) {
    user.age = age;
  }*/
  // Conditional (ternary) operator
  user.firstName = firstName ? firstName : user.firstName;
  user.lastname = lastname ? lastname : user.lastname;
  user.age = age ? age : user.age;

  res.send(`User with the id ${id} has been updated`);

};
