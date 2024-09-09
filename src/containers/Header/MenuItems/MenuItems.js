import React from "react";
import './MenuItems.css';
import MenuItem from "./MneuItem/MenuItem";
const MenuItems = ()=>{
    return(
        <ul className="MenuItems">
          <MenuItem link="/">
              Home
            </MenuItem>
          <MenuItem link={
            {
              pathname:"/add-student",
              search:"?sort=name",
              hash:"the-hash",
              state:{fromDashboard:true}
            }
          }>
            add student 
          </MenuItem>
          <MenuItem link="/transition">
          CSS TRANSITION
          </MenuItem>
          <MenuItem link="/animation">
          ANIMATION
          </MenuItem>
          <MenuItem link="/reactjs+csstransition">
          Reactjs + Csstransition
          </MenuItem>
        </ul>
    )
}
export default MenuItems;