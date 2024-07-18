import React from "react"

export default function Card({item , cart}) {
    let badgeText
    if (item.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (item.location === "Online") {
        badgeText = ""
    }
    
    return (
        
        <div className="card">
            {
                badgeText && 
                <div className="card--badge">{badgeText}</div>
            }
            <img 
                src={`../images/${item.coverImg}`} 
                className="card--image" 
            />
            <div className="card--stats">
                <img src="../images/star.png" className="card--star" />
                <span>{item.stats.rating}</span>
                <span className="gray">({item.stats.reviewCount}) • </span>
                
            </div>
            <p className="card--title">{item.title}</p>
            <p className="card--price">
                <span className="bold">From ${item.price}</span>
            </p>
            <button onClick={() => cart(item)} className="buyButton">Buy Item</button>
        </div>
        
    )
}