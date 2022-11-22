import { useContext } from "react";
import { GlobalContext } from "../storage/global";
import { SmallTitle } from "./ui/Titles";

const CartButton = (props) => {
  const globalContext = useContext(GlobalContext);
  const amounts = globalContext.cart.map((item) => item.amount);
  const totalAmount =
    amounts.length > 0
      ? amounts.reduce(function (accumulator, curValue) {
        return +accumulator + +curValue;
      })
      : 0;

  return (
    <button onClick={props.onClick} className="border-2 border-black		fixed flex items-center justify-center w-20 h-20 mr-16 rounded -right-10 bottom-10 bg-lightRed z-50">
      <img
        src="./assets/icons/cart-icon.svg"
        alt="shopping cart icon"
        className="h-10"
      />
      <div className="bg-brightRed w-6 h-6 rounded-full absolute top-0 -right-0">
        <SmallTitle title={totalAmount} additionalClasses="text-softWhite" />
      </div>
    </button>
  );
};

export default CartButton;
