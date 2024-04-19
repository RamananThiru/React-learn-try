

// start of E-01: Code snippet to iterate a array of elements and display the list items
// defined a state that takes the array as the list items
const [navItems, setNavItems] = useState([
    'Shop', 'Men', 'Women', 'Kids'
  ])

// Adds a hardcoded item to the list at all items
// Improved version would be getting input from the user and adding it to the navItems
  function handleOnClick() {
    console.log("Before appendig to current state", navItems)
    setNavItems(navItems => [...navItems, 'New Element Added to list'])
    console.log("After appendig to current state", navItems)
  }


 <ul>
    {
      navItems.map( (item) => {
        return <li key={item}> {item} </li>;
      })
    }
  </ul>

// End of E-01: adding elements via to list items

// E-02: Onclick breadcrumbs in navigation bar using <hr/>

// Defined a state as array of hashes . If there ate only two values , it could also be "Shop": true etc.. in a single hash
import React from "react";
import cart_icon from "../Assets/cart_icon.png";
import { useRef, useEffect } from "react";
import { useState } from "react";

export const Navbar = () => {
  const menu_items = ["Shop", "Men", "Women"];
  const ref = useRef();
  const [navItems, setNavItems] = useState([
    {
      name: "Shop",
      crumbValue: true,
    },
    {
      name: "Men",
      crumbValue: true,
    },
    {
      name: "Women",
      crumbValue: true,
    },
    {
      name: "Kids",
      crumbValue: true,
    },
  ]);

  // Questions
  // if the list_items have the same name , how should that be handled?
  // Is it good to have one state for each list item or have a common state and manage the common state ?


  // Basic onClick event , that uses map to iterate array of hashesh and update only the required hash among a bunch of hashes  
  const handleOnClick = (key) => {
    console.log("Before Updated the state", navItems);
    setNavItems((prevNavItems) =>
      prevNavItems.map((item) =>
        item.name === key ? { ...item, crumbValue: !item.crumbValue } : item
      )
    );
    console.log(navItems);
  };

  return (
    <div className="navbar">
      // <div className="nav-logo">
      //   <img src={logo} alt="" />
      //   <p> SHOPPER </p>
      // </div>

    // Note: OnClick={() => handleOnClick(item.name)} is the correct format
    // Did the mistake of using OnClick={handleOnClick(item.name} , this triggered a infinite loop of rendering
    // Ref: https://stackoverflow.com/questions/74251791/infinite-loop-when-i-update-state-after-onclick-event
    // Best explanation: https://stackoverflow.com/questions/61171364/react-onclick-event-trigger-infinitely-on-render
      <ul className="nav-menu">
        {navItems.map(
          (item) => {
          return (
            <li key={item.name} OnClick={() => handleOnClick(item.name)}>
              {item.name} {!item.crumbValue && <hr />}
            </li>
          );
        }
        )}
      </ul>
    </div>
  );
};

export default Navbar;

// End of E02 ----------------- Onclick breadcrumbs in navigation bar using <hr/>
