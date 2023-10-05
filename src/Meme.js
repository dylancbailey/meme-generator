import React, {useState} from "react";
import memesData from "./memesData";

function Meme() {

    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg",
    });

    const [allMemeImages, setAllMemeImages] = useState(memesData);

    function getMemeImage() {
        const memeArr = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memeArr.length)
        const {url} = memeArr[randomNumber]
        
        setMeme( memeObj => {
            return {
                ...memeObj,
                randomImage: url
            }
        });
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
            <img src={meme.randomImage} alt="" className="meme--img"/>
        </main>
    );
}

export default Meme;