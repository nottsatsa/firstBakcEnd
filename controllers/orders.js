let orders = [];
import { users } from './users.js';
import { v4 as uuidv4 } from 'uuid';
// app.post('/order/create',);
export const createOrder = (request, response) => {
  const { food, price, createDate, updateDate, id, orderId } = request.body;
  orders.push({
    id: id,
    food,
    price,
    createDate,
    updateDate,
    orderId,
  });
  users.find((user) => {
    if (user.id === id) {
      user.order.push({
        food,
        price,
        createDate: Date(),
        updateDate,
        orderId: uuidv4(),
      });
    }
  });

  response.send({ success: true, message: 'amjilttai' });
};

//   app.get('/orders/byId', );
export const getOrderById = (request, response) => {
  const { id } = request.body;
  const order = orders.find((order) => {
    return order.id === id;
  });
  response.send(order);
};

// app.put('/order/update', );
export const updateOrder = (request, response) => {
  const { food, price, id, orderId } = request.body;
  users.map((user) => {
    if (user.id === id) {
      user.order.map((zahialga) => {
        if (zahialga.orderId === orderId) {
          zahialga.food = food;
          zahialga.price = price;
          zahialga.updateDate = Date();
          zahialga.totalOrders = user.order.length;
          console.log(user.order, user.order.length, 'user order');
        }
      });
    }
  });
  response.send({ success: true, message: 'update data amjilttai' });
};
