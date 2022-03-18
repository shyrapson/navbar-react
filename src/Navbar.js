import React, { useState, useRef, useEffect } from "react";
import { FaBars, FaTwitter } from "react-icons/fa";
import { links, social } from "./data";
import logo from "./logo.svg";

export const Navbar = () => {
    const [showLinks, setShowLinks] = useState(false);
const linksContainerRef = useRef(null)
const linksRef = useRef(null)

// anytime the show links changes the effect should run
useEffect(()=>{
    // 1 check the height of links to adjust the link container;
    // the null is in the current
    // getBoundingClientRect returns some values

     const linksHeigth = linksRef.current.getBoundingClientRect().height
    if(showLinks){
        linksContainerRef.current.style.height = `${linksHeigth}px`
    } else {
        linksContainerRef.current.style.height = '0px'
    }
},[showLinks])

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt={logo} />
          <button className="nav-toggle" onClick={()=>setShowLinks(!showLinks)}>
            <FaBars />
          </button>
        </div>
        {/* if showLinks is true display navbar */}
       
                  <div className= "links-container" ref={linksContainerRef}>
                  <ul className="links" ref={linksRef}>
                    {links.map((link, index) => {
                      const { id, url, text } = link;
                      return (
                        <li key={id}>
                          <a href={url}>{text}</a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
        
  
        <ul className="social-icons">
     {social.map((socialIcon)=>{
         const {id,url,icon} = socialIcon;
         return <li key={id}><a href={url}>{icon}</a>
         
         </li>
     })}
        </ul>
      </div>
    </nav>
  );
};
