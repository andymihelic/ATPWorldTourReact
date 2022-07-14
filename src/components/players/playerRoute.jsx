import PlayerFilter from '../players/playerFilter';
import PlayerInfo from '../players/playerInfo';
import PlayerTable from '../players/playerTable';

function PlayerRoute() {
 
  return (
   <>
     <div
      style={{
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        width: "90vw",
        paddingTop: "1rem",
      }}
     >
      
      <PlayerFilter/>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "3fr 1fr",
          gap: "2rem",
        }}
      >
    
      <PlayerTable/>
      <PlayerInfo/>
      </div>
    </div>
  
 
    </>
   )

}
export default PlayerRoute