import ItemInfo from "./ItemInfo";
import TotalAmount from "./TotalAmount";
import Button from "./ui/Button";
import { useContext } from "react";
import { GlobalContext } from "../storage/global";
import { BigTitle } from "./ui/Titles";

const CartModal = (props) => {
  const globalContext = useContext(GlobalContext);
  const message = JSON.stringify(globalContext.cart);
  const formatedMessage = message
    .replaceAll("}", "")
    .replaceAll("{", "")
    .replaceAll("[", "")
    .replaceAll("]", "")
    .replaceAll('"', "")
    .replaceAll(",", "%20");

  const handleClearClick = () => {
    globalContext.setCart([]);
  };

  const handleOrderClick = () => {
    window.open(
      `https://api.whatsapp.com/send?phone=5585988594439&text=${formatedMessage}`
    );
  };

  return (
    <div className="flex flex-col items-center justify-center fixed	z-20 top-0 left-0 w-full h-full bg-modalBg">
      <div className="w-3/4 h-565 grid grid-cols-12 rounded-lg bg-softWhite py-8 px-8">
        <button
          onClick={props.closeBtnFunc}
          className="border border-brightRed flex flex-col justify-center items-center rounded-sm h-6 w-6 mb-4"
        >
          <img src="/assets/icons/close-icon.svg" alt="close icon" />
        </button>
        <div className="flex flex-col col-span-full px-8  overflow-y-auto">
          {globalContext.cart.length > 0 ? (
            globalContext.cart.map((cartItem, index) => (
              <ItemInfo
                additionalClasses="col-span-full"
                id={cartItem.id}
                name={cartItem.item}
                price={cartItem.price}
                index={index}
                isCart={true}
              />
            ))
          ) : (
            <>
              <BigTitle
                title="Empty cart"
                additionalClasses="col-span-full row-start-1 text-brightRed"
              />
              <img
                src="/assets/icons/empty-cart-icon.svg"
                alt="empty cart"
                className="col-span-full row-start-2 w-36 h-36 self-center my-auto "
              />
            </>
          )}
        </div>

        {globalContext.cart.length > 0 && (
          <TotalAmount additionalClasses="col-span-full my-8 ml-8 mr-8" />
        )}
        <div className="col-start-6	col-end-13 flex flex-row align-self-end justify-end items-end gap-x-3.5">
          {globalContext.cart.length > 0 && (
            <>
              <Button
                text="CLEAR CART"
                onClick={handleClearClick}
                additionalClasses="border border-brightRed text-brightRed w-1/4 h-12"
              />
              <Button
                text="ORDER"
                onClick={handleOrderClick}
                additionalClasses="w-1/4 h-12 bg-brightRed text-softWhite mr-8"
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartModal;
