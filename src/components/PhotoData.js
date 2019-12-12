import React, { useState, useEffect } from "react";
import axios from "axios";
import PhotoCard from "./PhotoCard";
import date from 'date-and-time';

export default function PhotoData() {
  const [photo, setPhoto] = useState({});
  const [today, setToday] = useState(date.format(new Date(), 'YYYY-MM-DD'));
  
  const changeDate = (e, i) => {
    e.preventDefault();
    setToday(i);
  }

  
  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=zUQnuRDac7vc1HWP5T7cHmS9cDJuJUnFdfmgKigk&date=${today}`) 
      .then(response => {
        
        setPhoto(response.data);
        
      })
      .catch(error => {
        console.log("the data was not return", error);
      });
  }, [today]);

  return (
    <div className="photo-card">
          <PhotoCard
          key={photo.date}
          title={photo.title}
          date={photo.date}
          description={photo.explanation}
          imageUrl={photo.url}
          imageHDUrl={photo.hdurl}
          changeDate={changeDate}
          />
    </div>
  );
}