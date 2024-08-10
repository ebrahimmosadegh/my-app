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
        </ul>
    )
}
export default MenuItems;