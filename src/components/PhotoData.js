import React, { useState, useEffect } from "react";
import axios from "axios";
import PhotoCard from "./PhotoCard";

export default function PhotoData() {
  const [photo, setPhoto] = useState([]);
  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=zUQnuRDac7vc1HWP5T7cHmS9cDJuJUnFdfmgKigk`)
      .then(response => {
        const nasaPhoto = response.data;
        setPhoto(nasaPhoto);
        console.log(nasaPhoto);
      })
      .catch(error => {
        console.log("the data was not return", error);
      });
  }, []);

  return (
    <div className="photo-card">
          <PhotoCard 
          key={photo.date}
          title={photo.title}
          date={photo.date}
          description={photo.explanation}
          imageUrl={photo.hdurl}
          />
    </div>
  );
}