// src/repositories/playerRepository.ts
import Player, { IPlayer } from '../models/Player';

class PlayerRepository {
  public async getAllPlayers(): Promise<IPlayer[]> {
    return Player.find();
  }

  public async getPlayerById(id: string): Promise<IPlayer | null> {
    return Player.findById(id);
  }

  public async createPlayer(playerData: IPlayer): Promise<IPlayer> {
    return Player.create(playerData);
  }

  public async updatePlayer(id: string, playerData: Partial<IPlayer>): Promise<IPlayer | null> {
    return Player.findByIdAndUpdate(id, playerData, { new: true });
  }

  public async deletePlayer(id: string): Promise<void> {
    await Player.findByIdAndDelete(id);
  }
}

export default new PlayerRepository();
