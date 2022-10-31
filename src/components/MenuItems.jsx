import { useState } from "react";

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
          <li
            className="w-72 h-60	grid grid-cols-12 grid-rows-6 gap-x-1"
            key={item.name}
          >
            <img
              src={item.image}
              alt={item.imageDescription}
              className="w-72 h-48 max-w-full max-h-full bg-cover	col-span-full	row-start-1 row-end-5"
            />
            <p className="font-display font-black mt-1 col-span-full row-start-5 row-end-5">
              {item.name}
            </p>
            <p className="text-base font-display font-black text-brightRed col-start-1 col-end-3 row-start-6 row-end-6">
              ${item.price}
            </p>
            <div className="flex flex-row justify-between px-1 py-1 items-center w-11 h-7 border border-grey shadow-lg col-start-9 col-end-10 row-start-6 row-end-6">
              <button>-</button>
              <p>1</p>
              <button>+</button>
            </div>
            <button className="bg-brightRed p-1 h-7 w-full rounded-sm col-start-11 col-end-13 row-start-6 row-end-6 flex justify-center items-center">
              <img src="/assets/icons/cart-icon-2.svg" alt="cart icon" />
            </button>
          </li>
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
