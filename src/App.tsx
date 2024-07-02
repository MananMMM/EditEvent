import { useEffect, useReducer, useState } from "react";
import "./App.css";
import { EventList } from "./components/EventList";
import { Filter } from "./components/Filter";
import { reducer } from "./lib/reducer";
import { initialState } from "./lib/initialState";
import { EventContext } from "./lib/Context";
import { getAllEvents } from "./lib/api";
import { ActionTypes } from "./lib/types";
import { AddEvent } from "./components/AddEvent";
import { EditEvent } from "./components/EditEvent";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  

  useEffect(() => {
    getAllEvents(state.currentFilter).then((response) => {
      dispatch({ type: ActionTypes.setEvents, payload: response });
    });
  }, [state.currentFilter]);

  return (
    <>
      <EventContext.Provider value={{ state, dispatch }}>
        <Filter />
      <AddEvent />
        <EventList />
      </EventContext.Provider>
    </>
  );
}

export default App;