import * as React from 'react';
import Books from './Books/index';
import Authors from './Authors';
import { Routes, Route } from "react-router-dom";
import Author from './Authors/show'
import Home from './Home';
import NewAuthor from './Authors/new';

export default function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="authors" element={<Authors />} />
        <Route exact path="authors/:id" element={<Author />} />
        <Route exact path="authors/new" element={<NewAuthor />} />
      </Routes>
      
    </React.Fragment>
  );
}