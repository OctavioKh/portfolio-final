import './App.css';
import {BrowserRouter as Router ,Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import SinglePost from './components/SinglePost';
import Post from './components/Post';
import Project from './components/Project';
import NavBar from './components/NavBar';
import Contacto from './components/Contacto';
import React from 'react';
import NavBar2 from './components/Footer';



function App() {
  return (
    <Router>
      <NavBar/>
    <Routes>
    <Route caseSensitive={false} element={<Home />} path='/' exact />
    <Route caseSensitive={false} element={<About />} path='/about' />
    <Route caseSensitive={false} element={<SinglePost />} path='/post/:slug' />
    <Route caseSensitive={false} element={<Post />} path='/post' />
    <Route caseSensitive={false} element={<Project />} path='/project' />
    <Route caseSensitive={false} element={<Contacto />} path='/contacto' />
    </Routes>
    <NavBar2/>
    </Router>
  );
}

export default App;
