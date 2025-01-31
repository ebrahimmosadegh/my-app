import './App.css';
import Toolbar from './containers/Header/Toolbar/Toolbar';
import SideDrawer from './containers/Header/SideDrawer/SideDrawer';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import HomePage from './pages/Homepage';
import EditStudent from './pages/EditStudent';
import React, { lazy,Suspense, useState, useContext } from 'react';
import AuthContextProvider from './context/Auth/authContext';
import { ThemeContext } from './context/Theme/themeContext';
import StudentsContextProvider from './context/Students/studentsContext';
import Transition from './components/animation/transition';
import Animation from './components/animation/animation';
import Mixtransition from './components/animation/mixtransition';
const AddStudent = React.lazy(()=>import('./pages/AddStudent'));
const App = () => {
// const navigated = useNavigate();
  const themeContext = useContext(ThemeContext);
  const {lightTheme, light, dark} = themeContext;
  const theme = lightTheme ?light:dark
  return (
    <BrowserRouter>
    <AuthContextProvider >
      <StudentsContextProvider>
    <div className="App" style={{background:theme.bg,color:theme.syntax}}>
      <SideDrawer />
      <Toolbar />
    <div style={{marginTop:'50px'}}>
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
      <Route path="/transition" Component={Transition} />
      <Route path="/animation" Component={Animation} />
      <Route path="/reactjs+csstransition" exact Component={Mixtransition} />
   </Routes>
    </div>
    </div>
    </StudentsContextProvider>
    </AuthContextProvider>
    
   </BrowserRouter>
    
  );
}

export default App;
