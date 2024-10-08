import React, { useEffect, useState } from 'react';
import './TextoverImage.css'
import { Link } from 'react-router-dom'

const Textoverimage = () => {


  const [textoverimage, settextoverimage] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/textoverimage') // Ensure the URL matches your backend route
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Fetched TextOverImage data:', data); // Log fetched data
        settextoverimage(data.map(item => ({
          Mainhead:item.Mainhead,
          Heading: item.Heading,
          Subhead: item.Subhead,
          Imgurl: item.Imgurl,
          Buttonone:item.Buttonone,
          linkone:item.linkone,
          Buttontwo:item.Buttontwo,
          linktwo:item.linktwo
        })));
      })
      .catch(error => console.error('Error fetching TextOverImage Data:', error));
  }, []);



  return (
    <>
    <div className='main-wrapper'>

    {textoverimage.map((item, index) => (
        <div key={index} className='Secondary-wrapper'>
        <div className='Text-wrapper'>
        <div className='Main-Text'>
            <p><span style={{color:'#000000', fontWeight:'900',fontSize:'45px'}}> {item.Mainhead} </span>{item.Heading}</p><br></br>
        </div>
        <div className='Secondry-Text'>
            <p>{item.Subhead}</p>
        </div>
        <div className='Home-banner-button-wrapper'>
        <div className='main-button'>
           <Link to={item.linkone}> <button>{item.Buttonone}</button></Link>
        </div>
        <div className='Renter-button'>
           <Link to={item.linktwo}> <button>{item.Buttontwo}</button></Link>
        </div>
        </div>
        </div>
<div className='Main-Image-wrapper'>
    <img src={item.Imgurl} alt='main_home_img'
    style={{width: '700px'}}/>
</div>

        </div>
         ))}

    </div>
    </>
  )
}

export default Textoverimage