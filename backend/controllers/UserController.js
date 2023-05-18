import UserModel from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken'

export const create = async (req, res) => {
    const { username, document, password } = req.body;
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
    
        const newUser = new UserModel({
          username,
          email,
          password: hashedPassword,
          
        });
    
        await newUser.save();
        res.status(200).json(user);
      }
    
      catch (error) {
        res.status(500).json(error);
      }
}
export const getById = async (req, res) => {
    const id = req.params.id;

    try {
        const user = await UserModel.findById(id);
        if (user) {
            const { password, ...rest } = user._doc;
            res.status(200).json(rest);
        } else {
            res.status(404).json({ message: "User not found" });
        }

    } catch (error) {
        res.status(500).json(error);
    }
}

export const getAll = async (req, res) => {
    try {
        let users = await UserModel.find();
        users = users.map((user) => {
            const { password, ...rest } = user._doc;
            return rest;

        });
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json(error);

    }
}
export const update = async (req, res) => {
    const id = req.params.id;
    const { _id, username, document, password } = req.body;

    if (id === _id) {

        try {
            if (password) {
                const salt = await bcrypt.genSalt(10);
                req.body.password = await bcrypt.hash(password, salt);
            }

            const user = await UserModel.findByIdAndUpdate(id, req.body, {
                new: true
            });
            const token = jwt.sign(
                { username: user.username, id: user._id },
                process.env.JWT_SECRET,
                { expiresIn: "1h" }
            );
            res.status(200).json({ user, token })

        } catch (error) {
            res.status(500).json(error);
        }
    } else {
        res.status(403).json("Access Denied! You can update only your own Account.");

    }
}

export const deleteUser = async (req, res) => {

    const id = req.params.id;
    const { _id } = req.body;
    if (id === _id) {
        try {
            await UserModel.findByIdAndDelete(id);
            res.status(200).json("User has been deleted...");

        } catch (error) {
            res.status(500).json(error);
        }

    }
}




