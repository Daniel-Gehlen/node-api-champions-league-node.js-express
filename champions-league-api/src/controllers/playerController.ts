// src/controllers/playerController.ts
import { Request, Response } from 'express';
import PlayerService from '../services/playerService';
import { IPlayer } from '../models/Player';

class PlayerController {
  public async getAllPlayers(req: Request, res: Response): Promise<void> {
    const players: IPlayer[] = await PlayerService.getAllPlayers();
    res.json(players);
  }

  public async getPlayerById(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const player: IPlayer | null = await PlayerService.getPlayerById(id);
    res.json(player);
  }

  public async createPlayer(req: Request, res: Response): Promise<void> {
    const playerData: IPlayer = req.body;
    const newPlayer: IPlayer = await PlayerService.createPlayer(playerData);
    res.json(newPlayer);
  }

  public async updatePlayer(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const playerData: Partial<IPlayer> = req.body;
    const updatedPlayer: IPlayer | null = await PlayerService.updatePlayer(id, playerData);
    res.json(updatedPlayer);
  }

  public async deletePlayer(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    await PlayerService.deletePlayer(id);
    res.status(204).send();
  }
}

export default new PlayerController();
