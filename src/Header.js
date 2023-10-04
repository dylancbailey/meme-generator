import React from "react";
import trollFace from "./images/troll-face.png"

function Header() {
    return(
        <header className="header">
            <div className="header--logo">
                <img src={trollFace} alt="" className="header--logo-img"/>
                <h3 className="header--logo-title">Meme Generator</h3>
            </div>
            <div className="header--subtitle">
                <p className="header--subtitle-tag">Meme it up</p>
            </div>
        </header>
    );
}

export default Header;