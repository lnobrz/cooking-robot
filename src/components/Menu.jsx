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
    items.filter((item) => item.category === "burgers")
  );

  return (
    <div className="flex flex-col justify-center items-center bg-lightRed pt-14 pb-28">
      <BigTitle title="Menu" marginTop="mt-12" />
      <MenuCategories items={items} setFilteredItems={setFilteredItems} />
      {filteredItems.length > 0 && <MenuItems items={filteredItems} />}
    </div>
  );
};

export default Menu;
