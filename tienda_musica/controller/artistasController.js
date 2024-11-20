import { artistaModel } from "../model/artistaModel.js";

export const obtenerArtistas = async (peticion, respuesta) => {
  try {
    const artistas = await artistaModel.find();
    res.status(200).json(artistas);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener artistas" });
  }
};

export const buscarArtistasPorGenero = async (peticion, respuesta) => {
  try {
    const { genero } = req.params;
    const artistas = await artistaModel.find({ genero: genero });
    res.status(200).json(artistas);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al buscar artistas por género" });
  }
};

export const actualizarArtista = async (peticion, respuesta) => {
  try {
    const { id } = req.params;
    await artistaModel.findByIdAndUpdate(id, { pais: "España" }, { new: true });
    res.status(200).json({ mensaje: "Artista actualizado con éxito" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al actualizar el artista" });
  }
};

export const eliminarArtista = async (peticion, respuesta) => {
  try {
    const { id } = req.params;
    await artistaModel.findByIdAndRemove(id);
    res.status(200).json({ mensaje: "Artista eliminado con éxito" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al eliminar el artista" });
  }
};
