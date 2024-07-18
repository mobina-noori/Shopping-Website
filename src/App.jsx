import React, { useState } from "react"
import Hero from "../components/Hero"
import Card from "../components/Card"
import data from "./data"
import Carousel from "../components/Carousel"
import Header from "../components/header"
import Cart from "../components/Cart"
import Footer from "../components/FooterDown"
import Login from '../components/Login-form'
export default function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const handleLogin = (loggedInUsername) => {
    setIsLoggedIn(true);
    setUsername(loggedInUsername);
  };
  //////////////////
    const [cart, setCart] = useState([])    

    const handleAddToCart = (newItem)=>{
        const isItemDuplicate = cart.some(item => item.id === newItem.id);

  if (isItemDuplicate) {
    const updatedCart = cart.map(item => {
      if (item.id === newItem.id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCart(updatedCart);
  } else {
    setCart([...cart, { ...newItem, quantity: 1 }]);
  }
    }

    const handleRemoveCart = (id) => {
        const newItems = cart.filter(item=>{
            return item.id !== id
        })
        setCart(newItems)
    }   

    const cards = data.map(item => {
        return (
            <Card
                key={item.id}
                item = {item}
                cart= {handleAddToCart}
            />
        )
    }) 

 
    const [currentPage, setCurrentPage] = useState("home");
    
    // return (
    //     <div>
    //         <div className="first-div">This page is made with love and hard work! enjoy it!</div>
    //         <Header setCurrentPage={setCurrentPage} cartNumber={cart.length} />
    //         {currentPage === "home" ? (
    //             <div>
    //             {/* محتوای صفحه اصلی */}
    //             <Carousel />
    //             <Hero />
    //             <section className="cards-list">
    //                     {cards}
    //             </section>
    //             <Footer />
    //             </div>
    //         ) : currentPage === "cart" ? (
    //             <div>
    //             <Cart items={cart} remove={handleRemoveCart}/>
    //             </div>
    //   ) : currentPage === "login" ? (
    //     <Login onLogin={() => setCurrentPage("home")} />
    //   ) : null}
    // </div>      
        
    // )
    return (
        <div>
          {!isLoggedIn ? (
            <Login onLogin={handleLogin} />
          ) : (
            <div>
              <div className="first-div">This page is made with love and hard work! enjoy it!</div>
              <Header setCurrentPage={setCurrentPage} cartNumber={cart.length} />
              {currentPage === "home" ? (
                <div>
                  {/* محتوای صفحه اصلی */}
                  <Carousel />
                  <Hero />
                  <section className="cards-list">
                    {cards}
                  </section>
                  <Footer />
                </div>
              ) : currentPage === "cart" ? (
                <div>
                  <Cart items={cart} remove={handleRemoveCart} />
                </div>
              ) : currentPage === "login" ? (
                <Login />
              ) : null}
            </div>
          )}
        </div>
      );
      
}