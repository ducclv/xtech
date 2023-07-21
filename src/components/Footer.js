import React from 'react';
import '../styles/footer.scss';
import SVG from "react-inlinesvg";
const Footer = () => {
    return (<div className='footer'>

        <SVG src={process.env.PUBLIC_URL + '/images/logo.svg' }/>
    </div>);
};
export default Footer;
