import { Router } from "express";
import servicoRoutes from "./servicoRoutes";
import categoriaRoutes from "./categoriaRoutes";
import subcategoriaRoutes from "./subcategoriaRoutes";

const router = Router();

router.use("/servicos", servicoRoutes);
router.use("/categorias", categoriaRoutes);
router.use("/sub-categorias", subcategoriaRoutes);

export default router;
