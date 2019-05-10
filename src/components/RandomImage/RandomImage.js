// Displays a random image
import React from 'react';
import image1 from '../../images/beautiful-calm-waters-dawn-1631678.jpg';
import image2 from '../../images/christopher-niziolek-1500852-unsplash.jpg';
import image3 from '../../images/max-saeling-563216-unsplash.jpg';

export default function RandomImage () {
    var imageArray = [image1, image2, image3]
    var randomImage = imageArray[Math.floor(Math.random()*3)];
    var imageStyle = {
        height: "100%",
        backgroundImage: "url(" + randomImage +")",
        backgroundPosition: "center",
        backgroundSize: "cover" 
    }
    return(
        // <img src={randomImage} alt="Scenic" style={{ maxWidth: "100%"}}/>
        <div style={imageStyle}></div>
    );
}
