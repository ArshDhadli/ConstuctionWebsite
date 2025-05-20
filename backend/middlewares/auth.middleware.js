import {asyncHandler} from '../utils/asyncHandler.js';
import {ApiError} from '../utils/ApiError.js';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';

export const verifyJWT = asyncHandler(async (req, res, next) => {
    try {
        const accessToken = req.cookies.accessToken || req.headers.authorization.split(" ")[1];

        if(!accessToken) {
            throw new ApiError(401, "Please login to access this resource");
        }

        const decodedToken = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);

        const user = await User.findById(decodedToken?._id).select('-password -refreshToken');

        if(!user) {
            throw new ApiError(401, "Please login to access this resource");
        }

        req.user = user;
        next();
    } catch (error) {
        throw new ApiError(401, "Invalid access token");
    }
    
});