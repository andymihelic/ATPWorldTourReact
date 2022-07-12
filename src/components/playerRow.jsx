import React from "react"
import {Button, TableRow, TableCell} from '@mui/material'
import { useDispatch } from "react-redux";
import { setSelectedPlayer } from "../redux/playerSlice";
    
const PlayerRow = ({ player }) => {
    const dispatch  = useDispatch()           
    return (          
        <TableRow>
            <TableCell>{player.ranking}</TableCell>
            <TableCell>{player.name}</TableCell>
            <TableCell>{player.country}</TableCell>
            <TableCell>{player.points}</TableCell>
            <TableCell><Button onClick={()=> 
            dispatch (setSelectedPlayer(player))}
            >Player Info</Button>
            </TableCell>
        </TableRow>
    )              
}

export default PlayerRow