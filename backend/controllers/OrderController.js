const Orders = require('../models/Orders');

exports.getOrders = async (req, res) => {
    try {
        const orders = await Orders.findAll();
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching orders', error });
    }
};

exports.updateOrderStatus = async (req, res) => {
    const { orderId, status } = req.body;
    try {
        const order = await Orders.findByPk(orderId);
        order.status = status;
        await order.save();
        res.status(200).json({ message: 'Order status updated successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error updating order status', error });
    }
};
