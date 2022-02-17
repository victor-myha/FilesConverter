import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import MainContent from "./components/MainContent/MainContent";
import './App.css'
import Grid from '@mui/material/Grid';

const  App: React.FC = ()  => {
  return (
    <Grid>
        <Navbar/>
        <MainContent/>
    </Grid>
  );
}

export default App;
