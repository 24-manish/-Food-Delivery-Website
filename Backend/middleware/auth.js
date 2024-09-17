import jwt from 'jsonwebtoken';

const authmiddleware = async (req, res, next) => {
    // Extract the token from the Authorization header
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(401).json({ success: false, message: 'Not authorized' });
    }

    const token = authHeader.split(' ')[1]; // Assuming Bearer token format

    if (!token) {
        return res.status(401).json({ success: false, message: 'Token missing' });
    }

    try {
        const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);
        req.body.userid = tokenDecode.id; // Assuming you want to add user ID to the request body
        next();
    } catch (error) {
        console.log(error);
        res.status(403).json({ success: false, message: 'Invalid token' });
    }
};

export default authmiddleware;
