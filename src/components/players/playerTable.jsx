import React from "react";
import { useEffect } from 'react';
import PlayerRow from "../players/playerRow";
import { setData } from "../../redux/playerSlice";
import { useDispatch, useSelector} from "react-redux";

import {Paper, TableContainer, Table, TableHead, TableRow, TableCell, TableBody} from "@mui/material"

const PlayerTable = () => {
    const { data, filter } = useSelector((state) => state.player)
    const dispatch = useDispatch()
    useEffect(() =>{
        fetch('https://atpworldtour.herokuapp.com/players')
        .then((res) => res.json())
        .then((player) => dispatch(setData(player))
      );
    }, []);
    return (
        <TableContainer component={Paper} sx={{display: 'flex', mt:1}}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Ranking</TableCell>
                        <TableCell>Player</TableCell>
                        <TableCell>Country</TableCell>
                        <TableCell>Points</TableCell>
                        <TableCell>Player Info</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data
                        .filter(({name})=> name.toLowerCase().includes(filter.toLowerCase()))
                        .slice(0, 10)
                        .map((player) => (
                        <PlayerRow key={player.id} player= {player}/>
                        )

                    )}

                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default PlayerTable