import { Router } from "express";
import {obtenerArtistas,buscarArtistasPorGenero,actualizarArtista} from "../controller/artistasController.js";
const router = Router()

router.get('/artista', obtenerArtistas)
router.get('/artista', buscarArtistasPorGenero)
router.post('/artista', actualizarArtista)

export default router;