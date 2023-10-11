import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";

function Menu() {
  // connect loader function with the component
  // implement the render as you fetch strategy
  // - fetch data at the same time as it renders the route
  // whereas useEffect() is the fetch on render approach
  const menu = useLoaderData();

  return (
    <ul className="divide-y divide-stone-200 px-2">
      {menu.map((pizza) => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </ul>
  );
}

// loader function for the async API call - different from useEffect()
export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;
