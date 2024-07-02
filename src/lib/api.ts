import { FilterTypes, IEvent } from "./types";
import axios from "axios";

const URL="http://localhost:3004/events"
export const getAllEvents=async(type:FilterTypes=FilterTypes.all):Promise<IEvent[]>=>{
    let temp=URL
    if(type!=FilterTypes.all){
   temp+="?type="+type
    }
    const response=await axios.get(temp )
    return response.data

}

export const editEvent=async():Promise<IEvent[]>=>{
   
    const response=await axios.put("http://localhost:3004/events" )
    return response.data

}