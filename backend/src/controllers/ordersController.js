import ordersModel from "../models/ordersModel.js";


const getAllOrders = async (req, res) => {
    try {
        const orders = await ordersModel.find();
        return res.status(200).json(orders);
    } catch (err) {
        return res.status(500).json({ message: 'Error al obtener pedidos', error: err.message });
    }
};

const getOrderById = async (req, res) => {
    try {
        const { id } = req.params;
        const order = await Order.findById(id);
        if (!order) return res.status(404).json({ message: 'Pedido no encontrado' });
        return res.status(200).json(order);
    } catch (err) {
        return res.status(500).json({ message: 'Error al obtener el pedido', error: err.message });
    }
};

const createOrder = async (req, res) => {
    try {
        const order = new Order(req.body);
        await order.save();
        return res.status(201).json(order);
    } catch (err) {
        return res.status(400).json({ message: 'Error al crear el pedido', error: err.message });
    }
};

const updateOrder = async (req, res) => {
    try {
        const { id } = req.params;
        const order = await Order.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
        if (!order) return res.status(404).json({ message: 'Pedido no encontrado' });
        return res.status(200).json(order);
    } catch (err) {
        return res.status(400).json({ message: 'Error al actualizar el pedido', error: err.message });
    }
};

const deleteOrder = async (req, res) => {
    try {
        const { id } = req.params;
        const order = await Order.findByIdAndDelete(id);
        if (!order) return res.status(404).json({ message: 'Pedido no encontrado' });
        return res.status(204).send();
    } catch (err) {
        return res.status(500).json({ message: 'Error al eliminar el pedido', error: err.message });
    }
};

module.exports = {
    getAllOrders,
    getOrderById,
    createOrder,
    updateOrder,
    deleteOrder,
};