import { SmallTitle } from "./components/ui/Titles";
import AmountInput from "./components/AmountInput";
import { useState } from "react";

const MenuItem = (props) => {
  const [amount, setAmount] = useState("");

  const handleCartBtnClick = (itemName, itemPrice) => {
    console.log("nome: ", itemName, "itemPrice: ", itemPrice);
    console.log(amount);
  };

  return (
    <li
      className="w-72 h-60	grid grid-cols-12 grid-rows-6 gap-x-1"
      key={props.name}
    >
      <img
        src={props.image}
        alt={props.imageDescription}
        className="w-72 h-48 max-w-full max-h-full bg-cover	col-span-full	row-start-1 row-end-5"
      />
      <SmallTitle
        title={props.name}
        additionalClasses="mt-1 col-span-full row-start-5 row-end-5"
      />
      <SmallTitle
        preText="$"
        title={props.price}
        additionalClasses="text-brightRed col-start-1 col-end-3 row-start-6 row-end-6"
      />
      <AmountInput amount={amount} amountSetter={setAmount} />
      <button
        className="bg-brightRed p-1 h-7 w-full rounded-sm col-start-11 col-end-13 row-start-6 row-end-6 flex justify-center items-center"
        onClick={(event) => handleCartBtnClick(props.name, props.price)}
      >
        <img src="/assets/icons/cart-icon-2.svg" alt="cart icon" />
      </button>
    </li>
  );
};

export default MenuItem;
