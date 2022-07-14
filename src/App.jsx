import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/home/home';
import Header from "./components/partials/header";
import PlayerRoute from './components/players/playerRoute';
import Footer from "./components/partials/footer";
import Register from './components/users/registerUser'
import Login from "./components/users/loginUser"
import ForgotPassword from './components/users/forgotPassword'
import ResetPassword from './components/users/resetPassword'
import NotFound from "./notFound"

function App() {
 
  return (
    <>
    <Router>
        <Header></Header>
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="users/register" element={<Register />} />
            <Route path="users/login" element={<Login />} />
            <Route path="users/forgotPassword" element={<ForgotPassword/>}/>
            <Route path="/players" element={ <PlayerRoute/> }/> 
            <Route path="/reset/:token" element={<ResetPassword/>}/>
            <Route path="*" element={<NotFound />}/>

            </Routes>
    
        <Footer></Footer>
    </Router>
    </>
   )

}

export default App
