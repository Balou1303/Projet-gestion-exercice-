import * as usersController from '../Controllers/usersController.js';

import express from "express";



const router = express.Router();

router.get('/allUsers', usersController.getUsers);
router.get('/infosUser', usersController.getInfosUsers);
router.get('/infosUserById/:id', usersController.getInfosUsers);
router.post('/addUser', usersController.addUser);
router.put('/updateUser/:id', usersController.updateUser);
router.delete('/deleteUser/:id', usersController.deleteUser);
router.post('/loginUser',usersController.getUserByEmail);

export default router