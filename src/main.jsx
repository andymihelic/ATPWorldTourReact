import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/partials/header";
import PlayerRoute from './components/players/playerRoute';
import Footer from "./components/partials/footer";
import Register from './components/users/registerUser'
import Login from "./components/users/loginUser"
import ForgotPassword from './components/users/forgotPassword'
import ResetPassword from './components/users/resetPassword'

import NotFound from "./notFound"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <Router>
        <Header></Header>
            <Routes>
            <Route path="/" element={<App />}/>
            <Route path="users/register" element={<Register />} />
            <Route path="users/login" element={<Login />} />
            <Route path="users/forgotPassword" element={<ForgotPassword/>}/>
            <Route path="/players" element={ <PlayerRoute/> }/> 
            <Route path="/reset/:token" element={<ResetPassword/>}/>
            <Route path="*" element={<NotFound />}/>

            </Routes>
    
        <Footer></Footer>
    </Router>
    </Provider>
  </React.StrictMode>
)

