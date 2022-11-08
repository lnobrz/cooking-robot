import CartModal from "./CartModal";
import CartButton from "./CartButton";
import { useState } from "react";
import ReactDOM from "react-dom";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCartClick = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      {isModalOpen &&
        ReactDOM.createPortal(
          <CartModal closeBtnFunc={handleCartClick} />,
          document.getElementById("cartModal")
        )}
      <nav className="h-28 flex flex-row justify-between items-center bg-lightRed">
        <img
          src="/assets/images/logo.png"
          alt="cooking robot's logo"
          className="w-20 h-20 ml-16"
        />
        <CartButton onClick={handleCartClick} />
      </nav>
    </>
  );
};

export default Header;
