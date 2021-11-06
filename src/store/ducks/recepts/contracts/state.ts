import { LoadingStatus } from "../../../types";
import { User } from "../../user/contracts/state";

export enum AddFormState {
    LOADING = 'LOADING',
    ERROR = 'ERROR',
    NEVER = 'NEVER',
}

export interface Recept {
    _id: string;
    text: string;
    images?: [];
    createdAt: string;
    user: User;
}

export interface ReceptsState {
    items: Recept[];
    LoadingStatus: LoadingStatus;
    addFormState: AddFormState;
}