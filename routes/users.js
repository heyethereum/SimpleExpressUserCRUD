import express from "express";
import { insertUser, getUsers, getUser, deleteUser, updateUser } from "../controllers/users.js";

const router = express.Router();

// All routes in here are starting with /users
router.get("/",getUsers);

// inserts new user
router.post("/", insertUser);

// retrieve user
router.get("/:id", getUser);

// deletes user
router.delete("/:id", deleteUser);

// updates user
router.patch("/:id", updateUser);

export default router;
