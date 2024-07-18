
import React from 'react';
//import { Slide } from 'react-slideshow-image';
//import 'react-slideshow-image/dist/styles.css';

const spanStyle = {
  padding: '20px',
  background: '#efefef',
  color: '#000000'
}

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: '400px'
}
const slideImages = [
  {
    url: 'https://www.bing.com/images/create/an-astronaut-dance-party-on-the-surface-of-mars2c-d/645ea9b38cec46fea561f4be407f085a?id=yHFxWw6XwvTU2XbTvkGYwg%3d%3d&view=detailv2&idpp=genimg&FORM=GCRIDP&mode=overlay',
    caption: 'Slide 1'
  },
  {
    url: 'https://www.bing.com/images/create/an-astronaut-dance-party-on-the-surface-of-mars2c-d/645ea9b38cec46fea561f4be407f085a?id=BthNhwsviFF3gGDWIQIVZA%3d%3d&view=detailv2&idpp=genimg&FORM=GCRIDP&mode=overlay',
    caption: 'Slide 2'
  },
  {
    url: 'https://www.bing.com/images/create/an-astronaut-dance-party-on-the-surface-of-mars2c-d/645ea9b38cec46fea561f4be407f085a?id=taakWuMU%2bc4SNC0%2fJwcvVA%3d%3d&view=detailv2&idpp=genimg&FORM=GCRIDP&mode=overlay',
    caption: 'Slide 3'
  },
];

export default function ImageSlider () {
    return (
       <div >
        className="slide-container"
         <Slide>
          {slideImages.map((slideImage, index)=> (
             <div key={index}>
               <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
                 <span style={spanStyle}>{slideImage.caption}</span>
               </div>
             </div>
           ))} 
         </Slide>
       </div>
      
    )
}