import { SmallTitle } from "./ui/Titles";
import AmountInput from "./AmountInput";
import { useContext, useState, useEffect } from "react";
import { GlobalContext } from "../storage/global";

const MenuItem = (props) => {
  const globalContext = useContext(GlobalContext);
  const idArray = globalContext.cart.map((item) => item.id);
  const [itemAmount, setItemAmount] = useState(0);
  const [resetAmount, setResetAmount] = useState(false);

  const addItem = (item) => {
    globalContext.setCart([
      ...globalContext.cart,
      {
        id: item.id,
        item: item.name,
        price: item.price,
        amount: itemAmount,
      },
    ]);
    setResetAmount(true);
  };

  const updateItem = (item) => {
    const filteredArray = globalContext.cart.filter(
      (cartItem) => cartItem.id !== item.id
    );
    const existentItem = globalContext.cart.filter(
      (cartItem) => cartItem.id === item.id
    );
    existentItem[0].amount = existentItem[0].amount + itemAmount;
    globalContext.setCart([...filteredArray, ...existentItem]);
    setResetAmount(true);
  };

  const handleCartBtnClick = (item) => {
    if (itemAmount > 0 && !idArray.includes(item.id)) {
      addItem(item);
    } else if (itemAmount > 0 && idArray.includes(item.id)) {
      updateItem(item);
    }
  };

  useEffect(() => {
    localStorage.setItem("userCart", JSON.stringify(globalContext.cart));
  }, [globalContext.cart]);

  return (
    <li
      className="w-72 h-60	grid grid-cols-12 grid-rows-6 gap-x-1"
      key={props.item.name}
    >
      <img
        src={props.item.image}
        alt={props.item.imageDescription}
        className="w-72 h-48 max-w-full max-h-full bg-cover	col-span-full	row-start-1 row-end-5"
      />
      <SmallTitle
        title={props.item.name}
        additionalClasses="mt-1 col-span-full row-start-5 row-end-5"
      />
      <SmallTitle
        preText="$"
        title={props.item.price}
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
        onClick={(event) => handleCartBtnClick(props.item)}
      >
        <img src="./assets/icons/cart-icon-2.svg" alt="cart icon" />
      </button>
    </li>
  );
};
export default MenuItem;
