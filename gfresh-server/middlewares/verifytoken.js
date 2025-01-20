const jwt = require("jsonwebtoken");
const secretKey = '12345678910';
const authenticateToken = (req, res, next) => {
    const authentionHeader = req.headers.authorization;
    if(!authentionHeader || !authentionHeader.startsWith("Bearer")) {
        return res.status(401).json({status: 'failed', errors: 'Unauthorized: Missing or invalid token'});
    }

    const token = authentionHeader.slice(7).replace(/"/g, ''); //Remove 'Bearer ' from the beginning
    //Verify the token
    jwt.verify(token, "12345678910", (error, decode) => {
        if (err) {
            return res.status(401).json({status: "failed", errors: "Unauthorized: Invalid token",token});
        }
        req.user = decode;
        next();
    });
};

module.exports = authenticateToken;