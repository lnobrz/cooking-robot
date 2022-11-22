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
    <button onClick={props.onClick} className="relative w-10 h-10 mr-16">
      <img
        src="./assets/icons/cart-icon.svg"
        alt="shopping cart icon"
        className="h-10"
      />
      <div className="bg-brightRed w-6 h-6 rounded-full absolute -top-6 -right-3">
        <SmallTitle title={totalAmount} additionalClasses="text-softWhite" />
      </div>
    </button>
  );
};

export default CartButton;
