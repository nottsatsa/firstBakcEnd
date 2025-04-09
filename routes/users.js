import express from 'express';
import {
  createUser,
  getUsers,
  getUserById,
  deleteUser,
  updateUser,
} from '../controllers/users.js';

export const userRouter = express.Router();

userRouter
  .get('/users', getUsers)
  .get('/user/:id', getUserById)
  .post('/user/create', createUser)
  .delete('/user/delete', deleteUser)
  .put('/user/update', updateUser);
