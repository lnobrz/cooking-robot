import { useState } from "react";
import MenuItem from "./MenuItem";

const MenuItems = (props) => {
  const [menuFullyOpen, setMenuFullyOpen] = useState(false);
  const container = document.getElementById("menuItemsContainer");

  const menuFullyOpenToggle = () => {
    setMenuFullyOpen((previousValue) => !previousValue);
    container.classList.toggle("max-h-534");
  };

  return (
    <div className="flex flex-col justify-center items-center rounded-lg bg-softWhite mx-16 my-16">
      <ul
        className="w-full flex justify-center max-h-534 overflow-hidden	items-start flex-wrap gap-7 mx-12 mt-16"
        id="menuItemsContainer"
      >
        {props.items.map((item) => (
          <MenuItem item={item} />
        ))}
      </ul>
      <button
        className="w-52 h-16 rounded-lg flex justify-center items-center bg-brightRed font-text font-black text-white mt-10 mb-16"
        onClick={menuFullyOpenToggle}
      >
        <p className="mr-1">{menuFullyOpen ? "view less" : "view more"}</p>
        <img
          src={
            menuFullyOpen
              ? "/assets/icons/arrow-up.svg"
              : "/assets/icons/arrow-down.svg"
          }
          alt={
            menuFullyOpen
              ? "arrow poiting up above"
              : "arrow poiting down bellow"
          }
        />
      </button>
    </div>
  );
};

export default MenuItems;
