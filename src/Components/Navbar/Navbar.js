import React from 'react';
import './navbar.css';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="imgLogo">
            <i className='fab fa-pinterest'></i>
            </div>
            <div className="inputSearch">
                <input type="text" placeholder="" />
                <i className="material-icons">search</i>
            </div>
            <div className="buttons">
                <a href='/inicio' className="btn" style={{color:'black'}}>Inicio</a> 
                <a href='/siguiendo' className="btn">Siguiendo</a> 
                <a href='/perfil' className="btn">Betsi<i className='fas fa-chevron-down' style={{fontSize:'14px'}}></i></a>            
                <a href='/chat' className="btn" ><i className='fas fa-comment-dots'></i></a>
                <a href='/notif' className="btn"><i className='fas fa-bell'></i></a>
                

            </div>
        </div>
    )
}

export default Navbar;