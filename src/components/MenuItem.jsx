import { SmallTitle } from "./ui/Titles";
import AmountInput from "./AmountInput";
import { useContext, useState } from "react";
import { GlobalContext } from "../storage/global";

const MenuItem = (props) => {
  const globalContext = useContext(GlobalContext);
  const [itemAmount, setItemAmount] = useState(0);
  const [resetAmount, setResetAmount] = useState(false);

  const handleCartBtnClick = (itemId, itemName, itemPrice) => {
    if (itemAmount > 0) {
      globalContext.setCart([
        ...globalContext.cart,
        {
          id: itemId,
          item: itemName,
          price: itemPrice,
          amount: itemAmount,
        },
      ]);
      setResetAmount(true);
    }
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
      <AmountInput
        reset={resetAmount}
        resetSetter={setResetAmount}
        amountSetter={setItemAmount}
        additionalClasses="border border-grey"
      />
      <button
        className="bg-brightRed p-1 h-7 w-full rounded-sm col-start-11 col-end-13 row-start-6 row-end-6 flex justify-center items-center"
        onClick={(event) =>
          handleCartBtnClick(props.id, props.name, props.price)
        }
      >
        <img src="/assets/icons/cart-icon-2.svg" alt="cart icon" />
      </button>
    </li>
  );
};

export default MenuItem;
