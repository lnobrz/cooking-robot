import { useContext, useRef, useEffect, useCallback } from "react";
import { GlobalContext } from "../storage/global";

const AmountInput = (props) => {
  const globalContext = useContext(GlobalContext);
  let updatedCart = [...globalContext.cart];
  const amount = useRef(0);

  const updateLocalStorageCart = useCallback(() => {
    localStorage.setItem("userCart", JSON.stringify(globalContext.cart));
  }, [globalContext.cart]);

  const handleInputChange = (event) => {
    if (props.isCart) {
      handleCartInputChange(+event.target.value);
    } else {
      handleMenuInputChange(+event.target.value);
    }
  };

  const handleCartInputChange = (eventValue) => {
    if (eventValue > 0) {
      updateCartAmount(eventValue);
    } else {
      excludeCartItem();
    }
  };

  const handleMenuInputChange = (eventValue) => {
    amount.current.value = eventValue;
    props.amountSetter(+amount.current.value);
  };

  const updateCartAmount = (eventValue) => {
    updatedCart[props.index] = {
      ...updatedCart[props.index],
      amount: eventValue,
    };
    globalContext.setCart(updatedCart);
  };

  const excludeCartItem = () => {
    updatedCart = updatedCart.filter((item, index) => index !== props.index);
    globalContext.setCart(updatedCart);
  };

  const resetAmount = useCallback(() => {
    amount.current.value = 0;
    props.resetSetter(false);
  }, [props]);


  const handleMinusClick = () => {
    if (props.isCart) {
      handleCartInputChange(updatedCart[props.index].amount - 1);
    } else {
      decreaseMenuAmount();
    }
  };

  const handlePlusClick = () => {
    if (props.isCart) {
      handleCartInputChange(updatedCart[props.index].amount + 1);
    } else {
      increaseMenuAmount();
    }
  };

  const decreaseMenuAmount = () => {
    amount.current.value = +amount.current.value - 1;
    props.amountSetter(+amount.current.value);
  };

  const increaseMenuAmount = () => {
    amount.current.value = +amount.current.value + 1;
    props.amountSetter(+amount.current.value);
  };

  useEffect(() => {
    if (props.reset === true) {
      resetAmount();
    }
    updateLocalStorageCart();
  }, [props.reset, resetAmount, updateLocalStorageCart]);

  return (
    <div
      className={`${props.additionalClasses} flex flex-row justify-center px-1 py-1 items-center w-16 h-7 shadow-lg col-start-8 col-end-10 row-start-6 row-end-6`}
    >
      <div className="flex flex-row justify-around items-center m-2">
        <button className="mx-1" onClick={handleMinusClick}>
          -
        </button>
        <input
          ref={amount}
          value={props.isCart && globalContext.cart[props.index].amount}
          type="text"
          name="amount"
          placeholder="0"
          onChange={handleInputChange}
          className="w-7 text-center self-center"
        />
        <button className="mx-1" onClick={handlePlusClick}>
          +
        </button>
      </div>
    </div>
  );
};

export default AmountInput;
