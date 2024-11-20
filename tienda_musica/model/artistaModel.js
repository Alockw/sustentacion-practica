import mongoose, { Schema } from "mongoose";

const artistaSchema = new Schema({
    nombreArtista: String,
    genero: String,
    pais: String
});

export const artistaModel = new mongoose.model('artista', artistaSchema);