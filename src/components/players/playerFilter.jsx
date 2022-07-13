import React from "react";
import { TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { setFilter } from "../../redux/playerSlice";

const PlayerFilter = () => {
  const dispatch = useDispatch(
  )
  return (
    <TextField
      label="Find player..."
      variant="filled"
      onChange={(event) => dispatch(setFilter(event.target.value))}
    />
  )
}
export default PlayerFilter;
