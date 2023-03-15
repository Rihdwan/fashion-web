import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';
import logo from '../../assets/vector.svg';


function Navbar() {

    const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='fas__navbar'>
        <div className='fas__navbar-link'>
            <div className='fas__navbar-link_logo'>
                <img src={logo} alt="fashion logo" />
                <p>FASHION</p>
            </div>
            <div className='fas__navbar-link_container'>
                <p><a href="#home">Home</a></p>
                <p><a href="#Catalogue">Catalogue</a></p>
                <p><a href="#Fashion">Fashion</a></p>
                <p><a href="#Favourite">Favourite</a></p>
                <p><a href="#Lifestyle">Lifestyle</a></p>
                <div className='fas__navbar-sign'>
                    <button type="button">Sign up</button>
                </div>
            </div>
        </div>

    {/* 3 line menu responsive */}
        <div className='fas__navbar-menu'>
            {toggleMenu
            ? <RiCloseLine color='#000' size={27} onClick={() => setToggleMenu(false)} />
            : <RiMenu3Line color="#000" size={27} onClick={() => setToggleMenu(true)} />}
            {toggleMenu && (
            <div className="fas__navbar-menu_container scale-up-tr">
                <div className="fas__navbar-menu_container-link">
                <p><a href="#home">Home</a></p>
                <p><a href="#Catalogue">Catalogue</a></p>
                <p><a href="#Fashion">Fashion</a></p>
                <p><a href="#Favourite">Favourite</a></p>
                <p><a href="#Lifestyle">Lifestyle</a></p>
                </div>
                
                <div className="fas__navbar-menu_container-link-sign">
                    <button type="button">Sign up</button>
                </div>
            </div>
            )}
        </div>
    </div>
  )
}

export default Navbar