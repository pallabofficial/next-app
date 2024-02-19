"use client";
import React, { useState } from 'react'
import axios from 'axios';
const header = (page) => {
    const[image, newImage] = useState([]);
    const generateImage = async()=>{
        try{
            let fetchedImage = await axios.get('https://picsum.photos/v2/list');
            let imgData = fetchedImage.data;
            newImage(imgData);
            console.log("successful");
        }
        catch{
            console.error("bhag bsdk");
        }
        
    }
  return (
    <div>
        <button onClick={generateImage}   className="border-2 border-black rounded-full">generate images</button>
        {image.map((element, index)=>{
            return (
                <img key={index} src={element.download_url}/>
            )
        })}
    </div>
  )
}

export default header;