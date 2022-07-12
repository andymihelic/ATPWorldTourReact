import {createSlice} from "@reduxjs/toolkit"
const initialState = {
    data: [],
    filter: "",
    selectedPlayer: null
}

const PlayerSlice = createSlice ({
    name: "player",
    initialState,
    reducers: {
        setData(state,action){
            state.data = action.payload
        },
        setFilter(state, action){
            state.filter = action.payload
        },
        setSelectedPlayer(state, action){
            state.selectedPlayer = action.payload
        }
    }
})

export const {setData, setFilter, setSelectedPlayer} = PlayerSlice.actions
export default PlayerSlice.reducer