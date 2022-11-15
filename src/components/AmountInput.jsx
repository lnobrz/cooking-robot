import { useContext, useRef, useEffect, useCallback } from "react";
import { GlobalContext } from "../storage/global";

const AmountInput = (props) => {
  const globalContext = useContext(GlobalContext);
  let newArr = [...globalContext.cart];
  const amount = useRef(0);

  const resetAmount = useCallback(() => {
    amount.current.value = 0;
    props.resetSetter(false);
  }, [props]);

  const updateLocalStorageCart = useCallback(() => {
    localStorage.setItem("userCart", JSON.stringify(globalContext.cart));
  }, [globalContext.cart]);

  useEffect(() => {
    if (props.reset === true) {
      resetAmount();
    }
    updateLocalStorageCart();
  }, [props.reset, resetAmount, updateLocalStorageCart]);

  const updateCartAmount = (eventValue) => {
    newArr[props.index] = {
      ...newArr[props.index],
      amount: eventValue,
    };
    globalContext.setCart(newArr);
  };

  const excludeCartItem = () => {
    newArr = newArr.filter((item, index) => index !== props.index);
    globalContext.setCart(newArr);
  };

  const handleCartAmountChange = (eventValue) => {
    if (eventValue > 0) {
      updateCartAmount(eventValue);
    } else {
      excludeCartItem();
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

  const handleMenuAmountChange = (eventValue) => {
    amount.current.value = eventValue;
    props.amountSetter(+amount.current.value);
  };

  const handleMinusClick = () => {
    if (props.isCart) {
      handleCartAmountChange(newArr[props.index].amount - 1);
    } else {
      decreaseMenuAmount();
    }
  };

  const handleInputChange = (event) => {
    if (props.isCart) {
      handleCartAmountChange(+event.target.value);
    } else {
      handleMenuAmountChange(+event.target.value);
    }
  };

  const handlePlusClick = () => {
    if (props.isCart) {
      handleCartAmountChange(newArr[props.index].amount + 1);
    } else {
      increaseMenuAmount();
    }
  };

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
