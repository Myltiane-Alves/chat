import { NextFunction, Request, Response } from "express";
import ChatUser from "../model/userModel";
import bcrypt from "bcryptjs";

export const register = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { username, email, password, cpf } = req.body;
    const usernameCheck = await ChatUser.findOne({ username });
    if (usernameCheck) {
      return res.json({ msg: "Username already used", status: false });
    }
    const emailCheck = await ChatUser.findOne({ email });
    if (emailCheck) {
      return res.json({ msg: "Email already used", status: false });
    }
    const cpfCheck = await ChatUser.findOne({ cpf });
    if (cpfCheck) {
      return res.json({ msg: "cpf already used", status: false });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await ChatUser.create({
      email,
      username,
      cpf,
      password: hashedPassword,
    });

    return res.json({ status: true, user });
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
        image: userData.avatarImage,
      });
    }
  } catch (ex) {
    next(ex);
  }
};

export const getAllUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const users = await ChatUser.find({ _id: { $ne: req.params.id } }).select([
      "email",
      "username",
      "cpf",
      "avatarImage",
      "_id",
    ]);
    return res.json(users);
  } catch (ex) {
    next(ex);
  }
};
