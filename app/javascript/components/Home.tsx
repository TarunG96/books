import * as React from 'react';
import Authors from './Authors'
import { Link } from "react-router-dom";

const Home = () => {  
  return (
    <div>
      <h1>Home Page</h1>
      <Link to={`/authors/`}>Go to Authors</Link>
    </div>
  )
}
export default Home