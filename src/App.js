import React from 'react';
import { Router } from './router/Router';
import { Link } from 'react-router-dom'
import './App.css'




class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <header>
          <h1>Router App</h1>
          <nav>
            <Link to="/">Home</Link> |
            <Link to="/products" >Produits</Link> |
          </nav>
        </header>
        <Router />
      </div>
    )
  }
}
export default App;
