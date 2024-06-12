import React, { useEffect, useState } from 'react';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { auth } from "../config/firebase";
import Body from "../layout/Body";
import BodyLan from "../layout/BodyLan";
import Contatos from '../pages/Contatos';
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Pessoal from "../pages/Pessoal";
import Principal from "../pages/Principal";
import Sobre from '../pages/Sobre';
import Surprise from '../pages/Surprise';
import LandingPage from "../pages/landingPage";
function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });

    // Limpar a inscrição ao desmontar
    return () => unsubscribe();
  }, []);

  return (
    <Router>
      <Routes>
        {/* Rota para a landing page com seu próprio layout */}
        <Route path="/" element={<BodyLan />}>
          <Route index element={<LandingPage />} />
          <Route path="sobre" element={<Sobre />} />
          <Route path="surprise" element={<Surprise/>} />
          <Route path="contatos" element={<Contatos />} />
        </Route>
        
        {/* Rotas para o sistema após o login com outro layout */}
        <Route path="/login" element={<Login />} />
        <Route path="/" element={currentUser ? <Body /> : <Navigate to="/login" />}>
          <Route path="principal" element={<Principal />} />
          <Route path="pessoal" element={<Pessoal />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
        
        {/* Rota para lidar com URLs desconhecidas */}
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
