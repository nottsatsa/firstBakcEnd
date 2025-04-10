import { v4 as uuidv4 } from 'uuid';
export const users = [];
let orders = [];
export const createUser = (request, response) => {
  const { username, gender, age, email, order, totalOrders } = request.body;

  const user = users.find((user) => user.email === email);
  if (user) {
    return response.send({
      success: false,
      message: 'bga email',
    });
  } else {
    users.push({
      username,
      gender,
      age,
      email,
      id: uuidv4(),
      order,
      totalOrders,
    });
    response.send({ success: true, message: 'amjilttai' });
  }
};

export const getUsers = (_, response) => {
  const data = { users: users, orders: orders };
  response.send(data);
  // response.send(users, orders);
};

export const getUserById = (request, response) => {
  const { id } = request.params;
  console.log(id);
  const user = users.find((user) => {
    return user.id === id;
  });
  response.send(user);
};

//   app.delete('/user/delete', );
export const deleteUser = (request, response) => {
  const { id } = request.body;
  users = users.filter((user) => user.id !== id);
  response.send({ success: true, message: 'succes' });
};

//   app.put('/user/update', );
export const updateUser = (request, response) => {
  const { id, username, age, email, gender } = request.body;
  users.map((user) => {
    if (user.id === id) {
      user.username = username;
      user.age = age;
      user.gender = gender;
      user.email = email;
    }
    return user;
  });
  response.send({ success: true, message: 'update data amjilttai' });
};
