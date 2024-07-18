import React from "react";
import HeroSlider, {Slide} from 'hero-slider';
const img1 = "https://github.com/Rahulfordev/Image-slider/blob/main/image/img1.png"
 export default function Slider() {
    return ( 
    <HeroSlider slideingAnimation="left_to_right"
    orientation="horizontal"
    initialSlide={1}
    onBeforeChange={(previousSlide, nextSlide) => console.log("onBeforeChange", previousSlide, nextSlide)}
    onChange = {nextSlide => console.log("onChange", nextSlide,)}
    onAfterChange ={nextSlide => console.log("onAfterChange", nextSlide,)}
    style={{
        backgroundColor: "rgba(0,0,0,0.33) ",
    }}
    settings={{
        slidingDuration :250,
        slidingDelay :100,
        shouldAutoPlay: true,
        shouldDisplayButtons: true,
        autoPalyDuration:5000,
        height:"100vh"
    }}
   >
        
        <Slide
            background = {{
                backgroundImage:img1,
                backgroundAttachment: "fixed"
            }}
       />

    </HeroSlider>
    )
}