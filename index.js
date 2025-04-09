// 1deh 4sariin 7
//  // get, post-create, put-update, delete
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

// //==================================================================================
// //2doh 4 sariin 8
// import express, { json, request, response } from 'express';
// import { v4 as uuidv4 } from 'uuid';
// const port = 8100; //backend iin koduud 8000-s deesh bn

// const app = express();

// app.use(json());

// let users = [];
// app.post('/user/create', (request, response) => {
//   const { username, gender, age, email } = request.body;
//   console.log(username, gender, age, email, 'body');
//   users.push({ username, gender, age, email, id: uuidv4() });
//   console.log(users, 'users');

//   response.send({ success: true, message: 'amjilttai' });
// });

// app.get('/users', (_, response) => {
//   response.send(users);
// });

// app.get('/user/', (request, response) => {
//   const { id } = request.body;
//   console.log(request.body, 'req');
//   const user = users.find((user) => {
//     return user.id === id;
//   });
//   response.send(user);
//   // response.send(users.find(({ id }) => id === request.body.id));
// });

// app.delete('/user/delete', (request, response) => {
//   const { id } = request.body;
//   users = users.filter((user) => user.id !== id);
//   response.send({ success: true, message: 'succes' });
// });

// app.put('/user/update', (request, response) => {
//   const { id, username, age, email, gender } = request.body;
//   // const updateDataIndex = users.findIndex((user) => user.id === id);
//   // users[updateDataIndex] = {
//   //   username: 'pppp',
//   //   gender: 'female',
//   //   age: '23',
//   //   email: 'wpppp@gmail.com',
//   //   id: id,
//   // };

//   users.map((user) => {
//     if (user.id === id) {
//       user.username = username;
//       user.age = age;
//       user.gender = gender;
//       user.email = email;
//     }
//     return user;
//   });
//   response.send({ success: true, message: 'update data amjilttai' });
// });

// app.get('/', (request, response) => {
//   // const { username, gender, age, email } = request.body;
//   response.send('hello world');
// });

// app.listen(port, () => {
//   console.log(`server running at http://localhost:${port}/`);
// });

// //==================================================================================
// // 2doh 4 sariin 8
// import express, { json, request, response } from 'express';
// import { v4 as uuidv4 } from 'uuid';
// const port = 8100; //backend iin koduud 8000-s deesh bn

// const app = express();

// app.use(json());

// let users = [];
// app.post('/user/create', (request, response) => {
//   const { username, gender, age, email, order } = request.body;
//   console.log(username, gender, age, email, order, 'body');
//   users.push({ username, gender, age, email, id: uuidv4(), order });
//   console.log(users, 'users');

//   response.send({ success: true, message: 'amjilttai' });
// });

// let orders = [];
// app.post('/order/create', (request, response) => {
//   const { food, price, createDate, updateDate, id } = request.body;
//   orders.push({
//     id: id,
//     food,
//     price,
//     createDate,
//     updateDate,
//   });
//   users.find((user) => {
//     if (user.id === id) {
//       user.order.push({
//         food,
//         price,
//         createDate: Date(),
//         updateDate,
//       });
//     }
//   });

//   response.send({ success: true, message: 'amjilttai' });
// });

// app.get('/users', (_, response) => {
//   const data = { users: users, orders: orders };
//   response.send(data);
//   // response.send(users, orders);
// });

// app.get('/user/', (request, response) => {
//   const { id } = request.body;
//   console.log(request.body, 'req');
//   const user = users.find((user) => {
//     return user.id === id;
//   });
//   response.send(user);
// });

// app.get('/orders/byId', (request, response) => {
//   const { id } = request.body;
//   const order = orders.find((order) => {
//     return order.id === id;
//   });
//   response.send(order);
// });

// app.delete('/user/delete', (request, response) => {
//   const { id } = request.body;
//   users = users.filter((user) => user.id !== id);
//   response.send({ success: true, message: 'succes' });
// });

// app.put('/user/update', (request, response) => {
//   const { id, username, age, email, gender } = request.body;
//   users.map((user) => {
//     if (user.id === id) {
//       user.username = username;
//       user.age = age;
//       user.gender = gender;
//       user.email = email;
//     }
//     return user;
//   });
//   response.send({ success: true, message: 'update data amjilttai' });
// });

// app.put('/order/update', (request, response) => {
//   const { food, price, createDate, updateDate } = request.body;
//   users.map((user) => {
//     if (user.id === id) {
//       user.order.food = food;
//       user.order.price = price;
//       user.order.createDate = createDate;
//       user.order.updateDate = Date();
//     }
//   });
// });

// app.listen(port, () => {
//   console.log(`server running at http://localhost:${port}/`);
// });

//==================================================================================
// 2doh 4 sariin 8
import express, { json, request, response } from 'express';
import { userRouter } from './routes/users.js';
import { orderRouter } from './routes/orders.js';
const port = 8100; //backend iin koduud 8000-s deesh bn

const app = express();

app.use(json());
app.use(userRouter);
app.use(orderRouter);

// let users = [];
// let orders = [];

app.listen(port, () => {
  console.log(`server running at http://localhost:${port}/`);
});
