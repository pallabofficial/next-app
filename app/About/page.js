"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Page = () => {
  const [image, getImage] = useState([]);
  const generateImage = async ()=>{
      let generate = await axios.get('https://picsum.photos/v2/list');
      let imageData = generate.data;
      getImage(imageData);
  }
  useEffect(()=>{
    generateImage();
  },[]);

  return (
    <div>
      {image.map((element, index)=>{
        return (<img key={index} src={element.download_url}/>)
      })}
    </div>
  );
};

export default Page;
