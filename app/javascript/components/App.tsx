import * as React from 'react';
import Books from './Books/index';
import Authors from './Authors';
import { Routes, Route } from "react-router-dom";
import Author from './Authors/show'
import Home from './Home';

export default function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="authors" element={<Authors />} />
        <Route path="authors/:id" element={<Author />} />
      </Routes>
      
    </React.Fragment>
  );
}