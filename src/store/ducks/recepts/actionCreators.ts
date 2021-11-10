import {
  FetchAddReceptActionInterface,
  ReceptsActionsType,
  AddReceptActionInterface,
} from './contracts/actionTypes';
import { Recept } from './contracts/state';

export const addRecept = (payload: Recept): AddReceptActionInterface => ({
  type: ReceptsActionsType.ADD_RECEPT,
  payload,
});

export type ReceptsActions =
  | FetchAddReceptActionInterface
  | AddReceptActionInterface;
