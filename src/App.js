import React from 'react';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import './App.scss';
import Loader from "./components/Loader/Loader";

function App() {
  return (
    <BrowserRouter>
        <Loader/>
        <AppRouter/>
    </BrowserRouter>
  );
}

export default App;
