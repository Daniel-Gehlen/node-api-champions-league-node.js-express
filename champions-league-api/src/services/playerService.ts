// src/services/playerService.ts
import PlayerRepository from '../repositories/playerRepository';
import { IPlayer } from '../models/Player';

class PlayerService {
  public async getAllPlayers(): Promise<IPlayer[]> {
    return PlayerRepository.getAllPlayers();
  }

  public async getPlayerById(id: string): Promise<IPlayer | null> {
    return PlayerRepository.getPlayerById(id);
  }

  public async createPlayer(playerData: IPlayer): Promise<IPlayer> {
    return PlayerRepository.createPlayer(playerData);
  }

  public async updatePlayer(id: string, playerData: Partial<IPlayer>): Promise<IPlayer | null> {
    return PlayerRepository.updatePlayer(id, playerData);
  }

  public async deletePlayer(id: string): Promise<void> {
    return PlayerRepository.deletePlayer(id);
  }
}

export default new PlayerService();
