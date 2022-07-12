import React from "react";
import {Card, CardContent, CardActions, Typography, Button} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {setSelectedPlayer} from "../redux/playerSlice";

const PlayerInfo = () => {
  const dispatch = useDispatch()
  const selectedPlayer = useSelector((state) => state.player.selectedPlayer)
   return (
    selectedPlayer && (
        <Card
          sx={{
            border: "1x solid lightGray",
            height: 510,
            minWidth: 250,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CardContent>
            <Typography variant="h5" gutterBottom sx={{ textAlign: "center" }}>
              {selectedPlayer.name}
            </Typography>
            <br></br>
            <Typography variant="h6" gutterBottom>
             Country: {selectedPlayer.country}
            </Typography>
            <Typography variant="h6" gutterBottom>
             Born: {selectedPlayer.dateofBirth}
            </Typography>
            <Typography variant="h6" gutterBottom>
             Height: {selectedPlayer.height}
            </Typography>
            <Typography variant="h6" gutterBottom>
             Weight: {selectedPlayer.weight}
            </Typography>
            <Typography variant="h6" gutterBottom >
             Plays: {selectedPlayer.plays}
            </Typography>
            <Typography variant="h6" gutterBottom >
             ATP Titles: {selectedPlayer.ATPtitles}
            </Typography>

          </CardContent>
          <CardActions>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => dispatch(setSelectedPlayer(null))}
            >
              dismiss
            </Button>
          </CardActions>
        </Card>
      )

    )
  };

export default PlayerInfo