import { albumesModel } from "../model/albumesModel.js";

export const obtenerAlbumes = async (peticion, respuesta) => {
  try {
    const albumes = await albumesModel.find();
    res.status(200).json(albumes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener álbumes" });
  }
};

export const obtenerAlbumesDeArtista = async (peticion, respuesta) => {
  try {
    const { id } = req.params;
    const albumes = await albumesModel.find({ artista: id });
    res.status(200).json(albumes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener álbumes del artista" });
  }
};

export const obtenerAlbumesPost2000 = async (peticion, respuesta) => {
  try {
    const albumes = await albumesModel.find({ fechaLanzamiento: { $gt: 2000 } });
    res.status(200).json(albumes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener álbumes lanzados después de 2000" });
  }
};

export const agregarCampoVentasAlbum = async (peticion, respuesta) => {
  try {
    const { id } = req.params;
    await albumesModel.findByIdAndUpdate(id, { ventas: 10000000 }, { new: true });
    res.status(200).json({ mensaje: "Campo ventas agregado con éxito" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al agregar campo ventas al álbum" });
  }
};

export const eliminarAlbumesAnteriores2000 = async (peticion, respuesta) => {
  try {
    await albumesModel.deleteMany({ fechaLanzamiento: { $lte: 2000 } });
    res.status(200).json({ mensaje: "Álbumes anteriores a 2000 eliminados con éxito" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al eliminar álbumes anteriores a 2000" });
  }
};
