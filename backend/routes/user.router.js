import express from 'express';
import { 
    registerUser, 
    loginUser, 
    logoutUser, 
    getCurrentUser,
    updateAccountDetails,
    changeCurrentPassword
} from '../controllers/user.controller.js';
import { upload } from "../middlewares/multer.middleware.js"
import { verifyJWT } from '../middlewares/auth.middleware.js';

const router = express.Router();

router.route("/register").post(
    upload.fields([
        {
            name: "coverImage",
            maxCount: 1
        }
    ]),
    registerUser
);

router.route("/login").post(loginUser);

// secured routes
router.route("/logout").post(verifyJWT, logoutUser);
router.route("/me").get(verifyJWT, getCurrentUser);
router.route("/update-profile").put(verifyJWT, updateAccountDetails);
router.route("/update-password").put(verifyJWT, changeCurrentPassword);

export default router;
