module.exports = (req, res, next) => {
    if (!req.user) {
        return res.status(401).send({ error: "You must login!" });
    }

    // If the user exists then send this response to the
    // next middleware
    next();
};
