// src/models/Player.ts
import mongoose, { Schema, Document } from 'mongoose';

export interface IPlayer extends Document {
  name: string;
  position: string;
  club: string;
}

const PlayerSchema: Schema = new Schema({
  name: { type: String, required: true },
  position: { type: String, required: true },
  club: { type: String, required: true },
});

export default mongoose.model<IPlayer>('Player', PlayerSchema);
