

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

