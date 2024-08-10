import React from "react";
import './MenuItem.css';
import { NavLink } from "react-router-dom";
const MenuItem = (probs)=>{
  
    return(
             <li className="MenuItem">
                <NavLink to={probs.link}>
                    {probs.children}
                    </NavLink>
            </li>
     )
}
export default MenuItem;