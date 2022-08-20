import React from "react";

const ImageCard = () => {
    return(
        <div className="image-container animated-image">
            <div className="image-box">
                <img src="/image/praise.png" alt="Praise Immanuel" />
            </div>

            <div className="image-box-stroke"></div>
        </div>
    );
}

export default ImageCard;