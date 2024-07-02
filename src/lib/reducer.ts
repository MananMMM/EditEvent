import { IState,IAction, ActionTypes, IEvent, FilterTypes } from "./types"

export const reducer =(state:IState,action:IAction)=>{
switch (action.type){
    case ActionTypes.setEvents:
        return {
            ...state,
            events:action.payload as IEvent[]
        }
        case ActionTypes.setFilter:
            console.log(action.payload)
            return{
                ...state,
                currentFilter:action.payload as FilterTypes
            }
            // case ActionTypes.editEvent:
            //     return {
            //         ...state

            //     }
    default:
        return state
}
}