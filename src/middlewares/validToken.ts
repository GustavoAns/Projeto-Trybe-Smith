import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import PayloadToken from '../interfaces/PayloadToken';

export default async (req: Request, res: Response, next:NextFunction) => {
  const { authorization } = req.headers;
  if (!authorization) return res.status(401).json({ error: 'Token not found' });
  try {
    const retorno = jwt.verify(authorization, 'trybe');
    // Refs
    // https://stackoverflow.com/questions/37377731/extend-express-request-object-using-typescript
    // https://expressjs.com/en/api.html#res.locals
    res.locals = { id: (retorno as PayloadToken).id };
    return next();
  } catch (_) {
    return res.status(401).json({ error: 'Invalid token' });
  }
};
