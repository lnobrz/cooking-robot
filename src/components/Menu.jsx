import { useEffect } from "react";
import { useState, useCallback } from "react";
import MenuCategories from "./MenuCategories";
import MenuItems from "./MenuItems";
import { BigTitle } from "./ui/Titles";

const Menu = () => {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState(
    items.filter((item) => item.category === "burgers")
  );

  const fetchItems = useCallback(async () => {
    const response = await fetch(
      "https://cooking-robot-f1d46-default-rtdb.firebaseio.com/menuItems.json"
    );
    const data = await response.json();
    for (const key in data) {
      setItems(data[key]);
    }
  }, []);

  useEffect(() => {
    fetchItems();
  }, [fetchItems]);

  return (
    <div className="flex flex-col justify-center items-center bg-lightRed pt-14 pb-28">
      <BigTitle title="Menu" marginTop="mt-12" />
      <MenuCategories items={items} setFilteredItems={setFilteredItems} />
      {filteredItems.length > 0 && <MenuItems items={filteredItems} />}
    </div>
  );
};

export default Menu;
