import MenuCategories from "./MenuCategories";
import MenuItems from "./MenuItems";

const Menu = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-lightRed pt-14 pb-28">
      <h2 className="font-display text-3xl text-center mt-12">Menu</h2>
      <MenuCategories />
      <MenuItems />
    </div>
  );
};

export default Menu;
