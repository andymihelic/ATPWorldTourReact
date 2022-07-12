import { configureStore } from "@reduxjs/toolkit"; 
import PlayerReducer from "./playerSlice";
export const store = configureStore({
    reducer : {
        player: PlayerReducer
    }
})