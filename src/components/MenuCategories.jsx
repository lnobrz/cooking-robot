import { useCallback, useState, useEffect } from "react";
import { SmallTitle, BigTitle } from "./ui/Titles";
import useFetch from "../hooks/use-fetch";

const MenuCategories = (props) => {
  const [loading, setLoading] = useState(true);
  const categories = useFetch(
    "https://cooking-robot-f1d46-default-rtdb.firebaseio.com/menuCategories.json"
  );

  useEffect(() => {
    if (categories) {
      setLoading(false)
    }
  }, [categories])

  const filterItems = useCallback(
    (event) => {
      if (Array.isArray(props.items)) {
        const filterResult = props.items.filter(
          (item) => item.category === event.target.id
        );
        props.setFilteredItems(filterResult);
      } else {
        props.setFilteredItems(props.items)
      }
    },
    [props]
  );
  useEffect(() => {

  }, [])

  const changeButtonBg = (event) => {
    const categoriesNodes = event.currentTarget.parentNode.childNodes
    for (const node of categoriesNodes) {
      node.classList.remove("bg-brightRed", "text-white", "rounded-lg")
    }

    event.currentTarget.classList.add("bg-brightRed", "text-white", "rounded-lg")
  }

  const handleClick = (event) => {
    changeButtonBg(event)
    filterItems(event)
  }

  return (
    <ul className="w-full flex flex-row lg:justify-center items-center flex-nowrap overflow-x-auto mx-5 justify-start">
      {loading ? <SmallTitle title="loading...." additionalClasses="mt-9" /> : (Array.isArray(categories) ? categories.map((category) => (
        <li
          className="p-1.5 mt-2.5 min-w-fit mx-1 hover:bg-brightRed hover:rounded-lg hover:text-white focus:bg-brightRed focus:rounded-lg focus:text-white"
          key={category.name}
          onClick={handleClick}
        >
          <button id={category.name}>
            <img
              src={category.image}
              alt={category.imageDescription}
              className="h-28"
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
      )) : <BigTitle title={categories} additionalClasses="text-brightRed mt-9" />)}
    </ul>
  );
};

export default MenuCategories;
