import { useReducer } from 'react';
import './App.css'
import PlayerFilter from './components/playerFilter';
import PlayerInfo from './components/playerInfo';
import PlayerTable from './components/playerTable';


function App() {
 
  return (
    <><h2>Men's Singles Ranking</h2>
     
      <div
      style={{
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        width: "60vw",
        paddingTop: "1rem",
      }}
      >
      
      <PlayerFilter/>
      <h1 className="title">Player Search</h1>
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

export default App
