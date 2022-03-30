import {
  Routes,
  Route
} from "react-router-dom"
import { About } from "../components/pages/about/About"

import { Body } from "../components/pages/index/Body"
import { Login } from "../components/pages/login/Login"
import { News } from "../components/pages/news/News"
import { RegisterNews } from "../components/pages/news/RegisterNews"
import { Perfil } from "../components/pages/perfil/Perfil"
import { Register } from "../components/pages/register/Register"
import PrivateRoute from "./Private"

export function AppRoutes() {

  return(
    <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/News" element={<News />} />
        <Route path="/About" element={<About />} /> 

        <Route path="/registerNews" element={
        <PrivateRoute redirectTo='/login'>
          <RegisterNews />
        </PrivateRoute>} 
        />

        <Route path="/perfil" element={
        <PrivateRoute redirectTo='/login'>
          <Perfil />
        </PrivateRoute>} />
    </Routes>
  )
}