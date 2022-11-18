import { useCallback } from "react";
import { SmallTitle } from "./ui/Titles";
import useFetch from "../hooks/use-fetch";

const MenuCategories = (props) => {
  const categories = useFetch(
    "https://cooking-robot-f1d46-default-rtdb.firebaseio.com/menuCategories.json"
  );

  const filterItems = useCallback(
    (event) => {
      const filterResult = props.items.filter(
        (item) => item.category === event.target.id
      );
      props.setFilteredItems(filterResult);
    },
    [props]
  );

  return (
    <ul className="flex flex-row justify-center items-center">
      {categories.map((category) => (
        <li
          className="flex flex-col justify-center items-center p-1.5 mt-2.5 mx-1 hover:bg-brightRed hover:rounded-lg hover:text-white focus:text-whitebg-brightRed focus:bg-brightRed focus:rounded-lg focus:text-white"
          key={category.name}
          onClick={filterItems}
        >
          <button id={category.name}>
            <img
              src={category.image}
              alt={category.imageDescription}
              className="h-36"
              id={category.name}
            />
            <SmallTitle
              title={
                category.name.charAt(0).toUpperCase() + category.name.slice(1)
              }
              id={category.name}
            />
          </button>
        </li>
      ))}
    </ul>
  );
};

export default MenuCategories;
