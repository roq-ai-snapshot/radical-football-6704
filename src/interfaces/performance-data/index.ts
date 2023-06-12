import { PlayerInterface } from 'interfaces/player';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface PerformanceDataInterface {
  id?: string;
  player_id: string;
  coach_id: string;
  data: string;
  created_at?: any;
  updated_at?: any;

  player?: PlayerInterface;
  user?: UserInterface;
  _count?: {};
}

export interface PerformanceDataGetQueryInterface extends GetQueryInterface {
  id?: string;
  player_id?: string;
  coach_id?: string;
  data?: string;
}
