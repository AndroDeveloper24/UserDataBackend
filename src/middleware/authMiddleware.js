const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    const token = req.header('Authorization');
    const email = req.header('Email');

    if (!token || !email) {
        return res.status(401).send('Access denied. No token or email provided.');
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if (decoded.email !== email) {
            throw new Error('Invalid token');
        }
        req.user = decoded;
        next();
    } catch (err) {
        res.status(400).send('Invalid token.');
    }
};

module.exports = authMiddleware;
