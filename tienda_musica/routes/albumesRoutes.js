import { Router } from "express";
import {obtenerAlbumes,obtenerAlbumesDeArtista,obtenerAlbumesPost2000,agregarCampoVentasAlbum} from "../controller/artistasController.js";
const router = Router()

router.get('/albumes', obtenerAlbumes)
router.get('/albumes', obtenerAlbumesDeArtista)
router.post('/albumes', obtenerAlbumesPost2000)
router.post('/albumes', agregarCampoVentasAlbum)

export default router;