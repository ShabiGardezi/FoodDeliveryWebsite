import React from "react";
import MenuItem from "./menuItem";
import { MenuList } from "../common/menuList";
import '../styles/menu.css'
function Menu() {
  return (
    <div className="menu">
      <h1 className="menuTitle">Our Menu</h1>
      <div className="menuList">
        {MenuList.map((menuitem, key) => {
          return (
            <>
              <MenuItem
                key={key}
                name={menuitem.name}
                price={menuitem.price}
                image={menuitem.image}
              />
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Menu;
