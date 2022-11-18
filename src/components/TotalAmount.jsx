import { BigTitle } from "./ui/Titles";
import { GlobalContext } from "../storage/global";
import { useContext, useEffect, useCallback, useState } from "react";

const TotalAmount = (props) => {
  const [roundedPrice, setRoundedPrice] = useState();
  const globalContext = useContext(GlobalContext);

  const roundFinalPrice = useCallback(() => {
    const prices = globalContext.cart.map((item) => item.price * item.amount);
    const finalPrice = prices.reduce(function (accumulator, curValue) {
      return +accumulator + +curValue;
    });
    setRoundedPrice(+finalPrice.toFixed([2]));
  }, [globalContext.cart]);

  useEffect(() => roundFinalPrice(), [roundFinalPrice]);

  return (
    <div
      className={`${props.additionalClasses} flex flex-row justify-between items-center`}
    >
      <BigTitle title="Total Amount: " />
      <BigTitle title={`$${roundedPrice}`} />
    </div>
  );
};

export default TotalAmount;
