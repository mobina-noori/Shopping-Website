import React from "react"
import "../StyleSheets/CompStyles.css"
import "../StyleSheets/header.css"
import { menuItems } from "./menuItems"
import MenuItems from "./MenuItem"


export default function Navbar() {
    return (
        <nav>
            
            <ul className="menus">

            {menuItems.map((menu, index) => {
            const depthLevel = 0;
            return <MenuItems items={menu}
             key={index} 
             depthLevel={depthLevel} />;

        })}
        
      </ul>
      
    </nav>
    );
}
