// import React from "react"

// export default function Hero() {
//     return (
//         <section className="hero">
//             <img src="../images/preview-beauty.jpg" className="hero--photo" />
//             <h1 className="hero--header">Online Experiences</h1>
//             <p className="hero--text">Join unique interactive activities led by 
//             one-of-a-kind hosts—all without leaving home.</p>
//         </section>
//     )
// }
import React from 'react';
import '../style.css';

export default function ImageBox() {
  return (
    <div className="hero-container">
      <img src="../images/preview-beauty.jpg" alt="Your Image" className="image" />
      
        <div className="text">
          <h2>BLOCK STAR</h2>
          <p>This 100% mineral daily sunscreen blends like a dream and delivers broad spectrum protection, plus a smooth, never-greasy finish.</p>
      </div>
    </div>
  );
}
