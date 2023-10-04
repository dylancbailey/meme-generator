import React, {useState} from "react";
import memesData from "./memesData";

function Meme() {

    const [memeImage, setMemeImage] = useState("");

    function getMemeImage() {
        const memeArr = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memeArr.length)
        const {url} = memeArr[randomNumber]
        
        setMemeImage( url )
    }

    return(
        <main>
            <div className="meme--form">
                <div className="meme-form-inputs">
                    <input type="text" placeholder="Top text" className="meme--form-input"/>
                    <input type="text" placeholder="Bottom text" className="meme--form-input"/>
                </div>
                <button onClick={getMemeImage} className="meme--form-btn">Get a new meme image 🖼️</button>
            </div>
            <img src={memeImage} alt="" className="meme--img"/>
        </main>
    );
}

export default Meme;