let orders = [];
import { users } from './users.js';
// app.post('/order/create',);

export const createOrder = (request, response) => {
  const { food, price, createDate, updateDate, id } = request.body;
  orders.push({
    id: id,
    food,
    price,
    createDate,
    updateDate,
  });
  users.find((user) => {
    if (user.id === id) {
      user.order.push({
        food,
        price,
        createDate: Date(),
        updateDate,
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
  const { food, price, createDate, id } = request.body;
  users.map((user) => {
    if (user.id === id) {
      user.order.food = food;
      user.order.price = price;
      user.order.createDate = createDate;
      user.order.updateDate = Date();
    }
  });
  response.send({ success: true, message: 'update data amjilttai' });
};
