import { useState } from "react";
import MenuItem from "../MenuItem";

const MenuItems = (props) => {
  const [isMenuFullyOpen, setIsMenuFullyOpen] = useState(false);

  const handleClick = () => {
    const container = document.getElementById("menuItemsContainer");
    container.classList.toggle("h-534");
    container.classList.toggle("h-full");
    setIsMenuFullyOpen(!isMenuFullyOpen);
  };

  return (
    <div className="flex flex-col justify-center items-center rounded-lg bg-softWhite mx-16 my-16">
      <ul
        className="w-full flex justify-center h-534 overflow-hidden	items-start flex-wrap gap-7 mt-16"
        id="menuItemsContainer"
      >
        {props.items.map((item) => (
          <MenuItem
            name={item.name}
            image={item.image}
            imageDescription={item.imageDescription}
            price={item.price}
          />
        ))}
      </ul>
      <button
        className="w-52 h-16 rounded-lg flex justify-center items-center bg-brightRed font-text font-black text-white mt-10 mb-16"
        onClick={handleClick}
      >
        <p className="mr-1">{isMenuFullyOpen ? "view less" : "view more"}</p>
        <img
          src={
            isMenuFullyOpen
              ? "/assets/icons/arrow-up.svg"
              : "/assets/icons/arrow-down.svg"
          }
          alt={
            isMenuFullyOpen
              ? "arrow poiting up above"
              : "arrow poiting down bellow"
          }
        />
      </button>
    </div>
  );
};

export default MenuItems;
