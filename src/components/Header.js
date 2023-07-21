import Navbar from './Navbar';
import {Link} from 'react-router-dom';
import React from "react";
import SVG from 'react-inlinesvg';


const Header = () => {
    return (
        <header>
            <div className="nav-area">
                <Link to="/" className="logo">
                    <SVG src={process.env.PUBLIC_URL + '/images/logo.svg'} style={{
                        height: "45px"
                    }}/>
                </Link>
                <Navbar/>
            </div>
        </header>
    );
};

export default Header;
