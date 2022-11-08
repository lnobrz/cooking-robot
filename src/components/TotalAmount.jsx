import { BigTitle } from "./ui/Titles";
import { GlobalContext } from "../storage/global";
import { useContext } from "react";

const TotalAmount = (props) => {
  const globalContext = useContext(GlobalContext);
  let pricesArray;
  let finalPrice;
  let roundedPrice;

  pricesArray = globalContext.cart.map((item) => item.price * item.amount);
  finalPrice = pricesArray.reduce(function (accumulator, curValue) {
    return +accumulator + +curValue;
  });
  roundedPrice = +finalPrice.toFixed([2]);

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
