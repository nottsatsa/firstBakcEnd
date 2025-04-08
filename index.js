// // get, post-create, put-update, delete
// import express, { json } from 'express';
// const port = 8100; //backend iin koduud 8000-s deesh bn

// const app = express(); //express iin server uusgedeg zuiliig 'app' huvisagchru hadgalla
// app.use(json());

// //.get ehleed 'path', 'function'
// app.get('/', (req, res) => {
//   res.send('hello world');
// });

// app.get('/user', (req, res) => {
//   const { username, pass } = req.body;
//   console.log(username, 'username');

//   if (username.length < 5) {
//     // console.log(req.body, "req");
//     res
//       .status(400)
//       .send({
//         succes: false,
//         message: 'username error',
//       })
//       .end();
//   }
//   console.log(username, 'username');

//   if (pass.length < 5) {
//     // console.log(req.body, "req");
//     res
//       .status(400)
//       .send({
//         succes: false,
//         message: 'pass error',
//       })
//       .end();
//   }
//   res.send({ succes: true }).end();
// });

// app.listen(port, () => {
//   console.log(`server running at http://localhost:${port}/`);
// });

import express, { json, request, response } from 'express';
import { v4 as uuidv4 } from 'uuid';
const port = 8100; //backend iin koduud 8000-s deesh bn

const app = express();

app.use(json());

let users = [];
app.post('/user/create', (request, response) => {
  const { username, gender, age, email } = request.body;
  console.log(username, gender, age, email, 'body');
  users.push({ username, gender, age, email, id: uuidv4() });
  console.log(users, 'users');

  response.send({ success: true, message: 'amjilttai' });
});

app.get('/users', (_, response) => {
  response.send(users);
});

app.get('/user/', (request, response) => {
  const { id } = request.body;
  console.log(request.body, 'req');
  const user = users.find((user) => {
    return user.id === id;
  });
  response.send(user);
  // response.send(users.find(({ id }) => id === request.body.id));
});

app.delete('/user/delete', (request, response) => {
  const { id } = request.body;
  users = users.filter((user) => user.id !== id);
  response.send({ success: true, message: 'succes' });
});

app.put('/user/update', (request, response) => {
  const { id, username, age, email, gender } = request.body;
  // const updateDataIndex = users.findIndex((user) => user.id === id);
  // users[updateDataIndex] = {
  //   username: 'pppp',
  //   gender: 'female',
  //   age: '23',
  //   email: 'wpppp@gmail.com',
  //   id: id,
  // };

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
});

app.get('/', (request, response) => {
  // const { username, gender, age, email } = request.body;
  response.send('hello world');
});

app.listen(port, () => {
  console.log(`server running at http://localhost:${port}/`);
});
