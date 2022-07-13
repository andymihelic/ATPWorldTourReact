import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/partials/header";
import PlayerRoute from './components/players/playerRoute';
import Footer from "./components/partials/footer";

function App() {
 
  return (
    <Router>
        <Header></Header>
            <Routes>
            
            
            <Route
            path="players"
            element={ <PlayerRoute></PlayerRoute> }
          ></Route>

            </Routes>
    
        <Footer></Footer>
    </Router>
   )

}

export default App
