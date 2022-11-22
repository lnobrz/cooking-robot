import { useState, useEffect } from "react";
import { SmallTitle, BigTitle } from "./ui/Titles";
import MenuItem from "./MenuItem";

const MenuItems = (props) => {
  const [loading, setLoading] = useState(true);
  const [menuFullyOpen, setMenuFullyOpen] = useState(false);
  const container = document.getElementById("menuItemsContainer");

  useEffect(() => {
    if (props.items) {
      setLoading(false)
    }
  }, [props.items])

  const menuFullyOpenToggle = () => {
    setMenuFullyOpen((previousValue) => !previousValue);
    container.classList.toggle("max-h-534");
  };

  return (
    <div className="flex flex-col justify-center items-center rounded-lg bg-softWhite m-16 p-16">
      <ul
        className="flex justify-center items-center flex-wrap max-h-534 overflow-hidden gap-7"
        id="menuItemsContainer"
      >{loading ? <SmallTitle title="loading..." additionalClasses="mt-9" /> : (Array.isArray(props.items) ?
        props.items.map((item) => (
          <MenuItem item={item} />
        ))
        : <BigTitle title={props.items} additionalClasses="text-brightRed mt-9" />)}
      </ul>
      {!loading && Array.isArray(props.items) && <button
        className="w-52 h-16 rounded-lg flex justify-center items-center 3xl:hidden bg-brightRed font-text font-black text-white mt-8"
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
      </button>}
    </div>
  );
};

export default MenuItems;
