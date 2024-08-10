import './App.css';
import Toolbar from './containers/Header/Toolbar/Toolbar';
import SideDrawer from './containers/Header/SideDrawer/SideDrawer';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import HomePage from './pages/Homepage';
import EditStudent from './pages/EditStudent';
import React, { lazy,Suspense, useState } from 'react';
const AddStudent = React.lazy(()=>import('./pages/AddStudent'));
const App = () => {
// const navigated = useNavigate();
  return (
    <BrowserRouter>
    <div className="App">
      <SideDrawer />
      <Toolbar />
    <div style={{marginTop:'70px'}}>
    <Routes>
   <Route path="/"  Component={HomePage} />
      <Route path="/add-student" 
      element={(
        <Suspense fallback={<p>...loading</p>}>
        <AddStudent />
      </Suspense>
      )} 
      />
      <Route path="/student/:id" Component={EditStudent} />
      

      
      
    
   </Routes>
    </div>
    </div>
   </BrowserRouter>
    
  );
}

export default App;
