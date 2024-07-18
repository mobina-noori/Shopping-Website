import Dropdown from './Dropdown';
import { useState , useEffect, useRef } from "react";

const MenuItems = ({ items , depthLevel }) => {
    const [dropdown, setDropdown] = useState(false);
    let ref = useRef();
    //using hook for cleaning up the menu opened depth
    useEffect(() => {
        const handler = (event) => {
         if (dropdown && ref.current && !ref.current.contains(event.target)) {
          setDropdown(false);
         }
        };
        document.addEventListener("mousedown", handler);
        document.addEventListener("touchstart", handler);
        return () => {
         // Cleanup the event listener
         document.removeEventListener("mousedown", handler);
         document.removeEventListener("touchstart", handler);
        };
       }, [dropdown]);
       
       //make menu visible and unvisible

       const onMouseEnter = () => {
        window.innerWidth > 500 && setDropdown(true);
       };
       
       const onMouseLeave = () => {
        window.innerWidth > 500 && setDropdown(false);
       };

  return (
    <li className="menu-items" ref={ref}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    >
      {items.submenu ? (
        <>
          <button 
            aria-expanded={dropdown ? "true" : "false"}
            onClick={() => setDropdown((prev) => !prev)}
          >
      {items.title}{" "}
      {depthLevel > 0 ? <span>&raquo;</span> : <span className="arrow" />}
          </button>

          <Dropdown depthLevel={depthLevel} submenus={items.submenu} dropdown={dropdown}  />
        </>
      ) : (
        <a>{items.title}</a>
      )}
    </li>
  );
};

export default MenuItems;
