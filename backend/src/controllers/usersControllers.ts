import { NextFunction, Request, Response } from "express";
import ChatUser from "../model/userModel";
import bcrypt from "bcrypt";
import userModel from "../model/userModel";

export const register = async (req: Request, res: Response, next: NextFunction) => {

    try {
        const { cpf, password, email, username } = req.body;
        // const userCheck = await ChatUser.find({ cpf, email, });
        // if (userCheck) {
        //     return res.status(400).json({ message: "User already used", status: false });
        // }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const newUser = await ChatUser.create({
            cpf,
            email,
            username,
            password: hashedPassword,
        });
        // return console.log(newUser, 'aqui');
        return res.json({ status: true, newUser })
    } catch (error) {
        next(error);
    }
}

export const getAllUsers = async (
    req: Request,
    res: Response,
    next: NextFunction

) => {
    try {
        const users = await ChatUser.find({ _id: { $ne: req.params.id } }).select([
            "cpf",
            "email",
            "username",
            "avatarImage",
            "_id",
        ]);
        return res.json(users);
    } catch (ex) {
        next(ex);
    }
}

export const setAvatar = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const userId = req.params.id;
        const avatarImage = req.body.image;
        const userData = await ChatUser.findByIdAndUpdate(
            userId,
            {
                isAvatarSet: true,
                avatarImage,
            },
            { new: true }
        );
        if (userData) {
            return res.json({
                isSet: userData.isAvatarSet,
                image: userData.avatarImg,
            });
        }
    } catch (ex) {
        next(ex);
    }
};

export const login = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const { cpf, password } = req.body;
        const user = await ChatUser.findOne({ cpf });
        if (!user) {
            return res.json({ msg: "Incorrect username or password", status: false });
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.json({ msg: "Incorrect username or password", status: false });
        }

        return res.json({ status: true, user });
    } catch (ex) {
        next(ex);
    }
};