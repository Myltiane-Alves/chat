import express from "express";
// import authMiddleWare from "./middleware/AuthMiddleware.js";
import UserController from "./controllers/UserController.js";
import ApiPing from "./controllers/ApiPing.js";
import authMiddleWare from "./middleware/AuthMiddleware.js";


const routes = express.Router();

// routes.use(authMiddleWare)

routes.get("/ping", ApiPing.index)

routes.post('/users', UserController.create)
routes.get('/users', UserController.getById)
routes.get('/users', UserController.getAll)
routes.put('/users', authMiddleWare, UserController.update)
routes.delete('/users', authMiddleWare, UserController.delete)

export default routes;