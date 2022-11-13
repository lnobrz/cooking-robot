import { useEffect } from "react";
import { useState, useCallback } from "react";
import MenuCategories from "./MenuCategories";
import MenuItems from "./MenuItems";
import { BigTitle } from "./ui/Titles";

const Menu = () => {
  const [fetcheditems, setFetchedItems] = useState({});
  const [itemsArray, setItemsArray] = useState([]);
  const [filteredItemsArray, setFilteredItemsArray] = useState(
    itemsArray.filter((item) => item.category === "burgers")
  );

  const fetchItems = useCallback(async () => {
    const response = await fetch(
      "https://cooking-robot-f1d46-default-rtdb.firebaseio.com/menuItems.json"
    );
    const data = await response.json();
    setFetchedItems(data);
  }, []);

  const createItemsArray = useCallback(() => {
    for (const key in fetcheditems) {
      setItemsArray(fetcheditems[key]);
    }
  }, [fetcheditems]);

  useEffect(() => {
    fetchItems();
    createItemsArray();
  }, [fetchItems, createItemsArray]);

  return (
    <div className="flex flex-col justify-center items-center bg-lightRed pt-14 pb-28">
      <BigTitle title="Menu" marginTop="mt-12" />
      <MenuCategories
        items={itemsArray}
        filteredItemsSetter={setFilteredItemsArray}
      />
      {filteredItemsArray.length > 0 && (
        <MenuItems items={filteredItemsArray} />
      )}
    </div>
  );
};

export default Menu;
