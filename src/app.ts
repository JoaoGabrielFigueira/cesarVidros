import express from "express";
import cors from "cors";

import serviceRoutes from "./routes/servicoRoutes";
import categoriaRoutes from "./routes/categoriaRoutes";
import subcategoriaRouter from "./routes/subcategoriaRoutes";

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/servicos', serviceRoutes);
app.use('/api/categorias', categoriaRoutes);
app.use('/api/sub-categorias', subcategoriaRouter);

export default app;
