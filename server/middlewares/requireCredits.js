module.exports = (req, res, next) => {
    if (req.user.credits < 1) {
        return res.status(403).send({ error: 'Not enough credits' });
    }

    // If the user exists then send this response to the
    // next middleware
    next();
};
