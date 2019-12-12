import React from "react";

const PhotoCard = props => {
    return (
      <div className="photo-card" >
        <img src={props.imageUrl} alt={props.title}/>
        <h2>{props.title}</h2>
        <p>Date: {props.date}</p>
        <p>{props.description}</p>
      </div>
    );
  };
  export default PhotoCard;