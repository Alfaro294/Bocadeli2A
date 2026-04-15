import express from "express";
import ordersController from "../controllers/ordersController.js";

const router = express.Router();

router. route("/")
.get(ordersController.getAllOrders)
.post(ordersController.createOrder)

router.route("/:id")
.get(ordersController.getOrderById)
.put(ordersController.updateOrder)
.delete(ordersController.deleteOrder)
export default router