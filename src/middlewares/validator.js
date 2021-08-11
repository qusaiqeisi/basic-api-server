'use strict';

module.exports = (req, res, next) => {
    if (Object.keys(req.query).length) {
        next();
    } else {
        res.status(500).json({ error: 'middleware error 500 in server' });
    }
};