import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import UserModel from "../models/userModel.js";

dotenv.config();
const secret = process.env.JWT_KEY;
const authMiddleware = async (req, res, next) => {
  try {
    // Verificar se o usuário está autenticado
    if (!req.headers.authorization) {
      throw new Error('Token de autenticação não fornecido.');
    }

    // Extrair o token de autenticação
    const token = req.headers.authorization.replace(jwt, secret);

    // Encontrar o usuário pelo token
    const user = await UserModel.findOne({ token });

    // Verificar se o usuário existe
    if (!user) {
      throw new Error('Usuário não autenticado.');
    }

    // Anexar o usuário autenticado ao objeto de solicitação (request)
    req.user = user;

    // Permitir que a requisição continue
    next();
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};

export default authMiddleware;

// try {
//   let token = req.headers.authorization;
//   console.log(token, 'chegou aqui ?')
//   if(token) {
//      token = token.split(' ')[1];
//      let user =  jwt.verify(token, secret);
//      console.log(secret)
//     req.userId = user.id;
//   } else {
//     res.status(401).json({message: "Unauthorized user 1"})
//   }
//   next()
// } catch(error) {
//   res.status(401).json({message: "Unauthorized user 2"});
// }

// try {
//   let success = false;

//   if(success) {
//     next();
//   } else {
//     res.status(401).json({message: "Unauthorized user"});
//   }
//   res.status(200).json({message: "Unauthorized user"});
//   next();
// } catch (error) {
//   console.log(error);
// }