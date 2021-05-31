import React from "react";

const BackgroundImage = ({imageUrl}) => {
    return(
        <div className="dashboard" style={
            {backgroundImage: `url(${imageUrl})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
            }
        } />
    )
}

export default BackgroundImage;