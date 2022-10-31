const MenuCategories = (props) => {
  const categories = [
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
  ];

  const handleClick = (event) => {
    const filterResult = props.items.filter(
      (item) => item.category === event.target.id
    );
    props.filteredItemsSetter(filterResult);
  };

  return (
    <div className="flex flex-row justify-center items-center">
      {categories.map((category) => (
        <button
          className="flex flex-col justify-center items-center p-1.5 mt-2.5 mx-1 hover:bg-brightRed hover:rounded-lg  hover:text-white focus:bg-brightRed focus:rounded-lg  focus:text-white"
          key={category.name}
          id={category.name}
          onClick={handleClick}
        >
          <img
            src={category.image}
            alt={category.imageDescription}
            className="h-36"
            id={category.name}
          />
          <p className="text-base font-display font-black" id={category.name}>
            {category.name.charAt(0).toUpperCase() + category.name.slice(1)}
          </p>
        </button>
      ))}
    </div>
  );
};

export default MenuCategories;
