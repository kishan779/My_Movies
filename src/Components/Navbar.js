import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        return (
            <div style={{display:'flex',padding:'0.5'}}>
               <h1 style={{marginTop:'1rem',marginLeft:'1rem'}}>  🎬  </h1>
                <Link to="/" style={{textDecoration:'Action'}}><h1 style={{marginTop:'1rem',marginLeft:'1rem'}}>Movies App</h1></Link>
                <Link to="/favourites" style={{textDecoration:'Action'}}><h2 style={{marginLeft:'1.5rem',marginTop:'1.4rem'}}>Favourites</h2></Link>
                
                
            </div>
        )
    }
}
