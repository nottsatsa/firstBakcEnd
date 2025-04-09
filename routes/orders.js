import express from 'express';
import {
  createOrder,
  getOrderById,
  updateOrder,
} from '../controllers/orders.js';

export const orderRouter = express.Router();
orderRouter
  .post('/order/create', createOrder)
  .get('/orders/byId', getOrderById)
  .put('/order/update', updateOrder);
