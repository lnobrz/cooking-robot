import { useState } from "react";
import MenuCategories from "./MenuCategories";
import MenuItems from "./MenuItems";
import { BigTitle } from "./ui/Titles";
import useFetch from "../hooks/use-fetch";

const Menu = () => {
  const items = useFetch(
    "https://cooking-robot-f1d46-default-rtdb.firebaseio.com/menuItems.json"
  );
  const [filteredItems, setFilteredItems] = useState(
    Array.isArray(items) ? items.filter((item) => item.category === "burgers") : items
  );

  return (
    <div className="flex flex-col items-center bg-lightRed py-14" id="menu">
      <BigTitle title="What do you want to eat today?" marginTop="mt-12" additionalClasses="text-center" />
      <MenuCategories items={items} setFilteredItems={setFilteredItems} />
      {filteredItems.length > 0 && <MenuItems items={filteredItems} />}
    </div>
  );
};

export default Menu;
