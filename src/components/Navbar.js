import React from "react";



function Navbar () {
    return(
        <nav>
            <div className="logo">
                <img className="logo-img" src={require("../img/Troll Face.png")} alt="logo" />
                <h1>Meme Generator</h1>
            </div>
            <h3>React Course - Project 3</h3>
        </nav>
    )
}

export default Navbar