import { PlayerInterface } from 'interfaces/player';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface AcademyInterface {
  id?: string;
  name: string;
  description?: string;
  image?: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  player?: PlayerInterface[];
  user_user_academy_idToacademy?: UserInterface[];
  user_academy_user_idTouser?: UserInterface;
  _count?: {
    player?: number;
    user_user_academy_idToacademy?: number;
  };
}

export interface AcademyGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  image?: string;
  user_id?: string;
  tenant_id?: string;
}
