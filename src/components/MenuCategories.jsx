import { useCallback, useMemo } from "react";
import { SmallTitle } from "./ui/Titles";

const MenuCategories = (props) => {
  const categories = useMemo(
    () => [
      {
        name: "burgers",
        image: "/assets/images/menu-illustration-1.png",
        imageDescription: "double meat hamburger",
      },
      {
        name: "pizzas",
        image: "/assets/images/menu-illustration-2.png",
        imageDescription: "pizza slice with cheese overflowing",
      },
      {
        name: "pastas",
        image: "/assets/images/menu-illustration-3.png",
        imageDescription: "fork with spaghetti",
      },
      {
        name: "vegan",
        image: "/assets/images/menu-illustration-4.png",
        imageDescription: "bow with salad",
      },
      {
        name: "desserts",
        image: "/assets/images/menu-illustration-5.png",
        imageDescription: "slice of cake",
      },
      {
        name: "combos",
        image: "/assets/images/menu-illustration-6.png",
        imageDescription: "burger and chips",
      },
      {
        name: "drinks",
        image: "/assets/images/menu-illustration-7.png",
        imageDescription: "cup full of juice with a pineapple behind of it",
      },
    ],
    []
  );
  const resetBurgersContainer = useCallback(() => {
    const burgersContainer = document.getElementById("burgers");

    burgersContainer.classList.remove(
      "bg-brightRed",
      "rounded-lg",
      "text-white"
    );
  }, []);

  const { items } = props;

  const addFilteredItems = useCallback(
    (event) => {
      const filterResult = props.items.filter(
        (item) => item.category === event.target.id
      );

      props.filteredItemsSetter(filterResult);
    },
    [items]
  );

  const handleClick = (event) => {
    addFilteredItems(event);
    resetBurgersContainer();
  };

  return (
    <ul className="flex flex-row justify-center items-center">
      {categories.map((category) => (
        <li
          className="flex flex-col justify-center items-center p-1.5 mt-2.5 mx-1 hover:bg-brightRed hover:rounded-lg hover:text-white focus:text-whitebg-brightRed focus:bg-brightRed focus:rounded-lg focus:text-white"
          key={category.name}
          onClick={handleClick}
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
