import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {
  RegisterScreen,
  LoginScreen,
  HomeScreen,
  GameScreen
} from './components';
import { AuthProvider } from './auth';

function App() {
  return (
    <AuthProvider>
    <BrowserRouter>
        <Routes>
          <Route path='/' element ={<HomeScreen/>} />
          <Route path="/register/" element={<RegisterScreen/>} />
          <Route path="/login/"  element={<LoginScreen/>} /> 
          <Route path= "/game/" element={<GameScreen/>}/>
        </Routes>
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
