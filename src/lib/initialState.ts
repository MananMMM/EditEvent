import { IState } from "./types";
import { FilterTypes } from "./types";

export const initialState:IState={
    events:[],
    currentFilter:FilterTypes.all
}