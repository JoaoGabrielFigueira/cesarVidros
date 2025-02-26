import { Request, Response, NextFunction } from "express";

// Middleware para tratamento de erros globais
const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error("Erro no servidor:", err.message);

    res.status(500).json({
        message: "Ocorreu um erro interno no servidor.",
        error: err.message,
    });
};

export default errorHandler;
