import ItemInfo from "./ItemInfo";
import TotalAmount from "./TotalAmount";
import Button from "./ui/Button";
import { useContext, useState } from "react";
import { GlobalContext } from "../storage/global";
import { BigTitle } from "./ui/Titles";

const CartModal = (props) => {
  const [isOrderFinished, setIsOrderFinished] = useState(false);
  const globalContext = useContext(GlobalContext);
  let orderMessage;

  const createOrderMessage = () => {
    const unformatedMessage = JSON.stringify(globalContext.cart);
    const formatedMessage = unformatedMessage
      .replaceAll("}", "")
      .replaceAll("{", "")
      .replaceAll("[", "")
      .replaceAll("]", "")
      .replaceAll('"', "")
      .replaceAll(",", "%20")
      .replaceAll(":", ": ");

    orderMessage = formatedMessage;
  };

  const sendOrderMessage = () => {
    window.open(
      `https://api.whatsapp.com/send?phone=5585988594439&text=${orderMessage}`
    );
  };

  const resetOrderState = () => {
    setIsOrderFinished(true);
    setTimeout(() => {
      setIsOrderFinished(false);
    }, 3000);
  };

  const clearOrder = () => {
    globalContext.setCart([]);
  };

  const finishOrder = () => {
    createOrderMessage();
    sendOrderMessage();
    resetOrderState();
    clearOrder();
  };

  return (
    <div className="flex flex-col text-center items-center justify-center fixed	z-20 top-0 left-0 w-full h-full bg-modalBg">
      <div className="w-10/12 md:w-8/12 lg:w-6/12 h-565 grid grid-cols-12 rounded-lg bg-softWhite py-8 px-8">
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
                item={cartItem}
                index={index}
                isCart={true}
              />
            ))
          ) : (
            <>
              <BigTitle
                title={isOrderFinished ? "Order finished!" : "Empty cart"}
                additionalClasses={`col-span-full row-start-1 ${isOrderFinished ? "text-brightGreen" : "text-brightRed"
                  }`}
              />
              <img
                src={
                  isOrderFinished
                    ? "/assets/images/order-finished.png"
                    : "/assets/icons/empty-cart-icon.svg"
                }
                alt={
                  isOrderFinished ? "cart with a checked symbol" : "empty cart"
                }
                className="col-span-full row-start-2 w-36 h-36 self-center my-auto "
              />
            </>
          )}
        </div>
        {globalContext.cart.length > 0 && (
          <TotalAmount additionalClasses="col-span-full my-8 ml-8 mr-8" />
        )}
        <div className="col-start-1 col-end-12 xsm:col-start-1 xsm:col-end-8 sm:col-start-6	sm:col-end-13 flex flex-row align-self-end justify-start sm:justify-end items-end gap-x-3.5">
          {globalContext.cart.length > 0 && (
            <>
              <Button
                text="CLEAR CART"
                onClick={clearOrder}
                additionalClasses="border border-brightRed text-brightRed ml-6 sm:ml-0 w-6/12 xsm:w-4/12 sm:w-1/4 h-12 p-8"
              />
              <Button
                text="ORDER"
                onClick={finishOrder}
                additionalClasses="w-6/12 xsm:w-4/12 sm:w-1/4 h-12 bg-brightRed text-softWhite mr-8 p-8"
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartModal;
