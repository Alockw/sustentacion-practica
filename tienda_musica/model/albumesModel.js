import mongoose, { Schema } from "mongoose";

const albumesSchema = new Schema({
    nombreAlbum: String,
    fechaLanzamiento: Number,
    artista: Schema.Types.ObjectId,
    ventas: Number
});

export const albumesModel = new mongoose.model('albumes', albumesSchema);
