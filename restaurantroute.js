import express from 'express';
import {createrestaurant, getAll, getOne, update} from '../controller/restaurantcontroller.js';
const route=express.Router();
route.post('/create',createrestaurant);
route.get('/getAll',getAll);
route.get('/getOne/:id',getOne);
route.put('/update/:id',update);
export default route;