import { BigTitle } from "./ui/Titles";
import { GlobalContext } from "../storage/global";
import { useContext } from "react";

const TotalAmount = (props) => {
  const globalContext = useContext(GlobalContext);
  let pricesArray;
  let finalPrice;
  let roundedPrice;

  const calculateFinalPrice = () => {
    pricesArray = globalContext.cart.map((item) => item.price * item.amount);
    finalPrice = pricesArray.reduce(function (accumulator, curValue) {
      return +accumulator + +curValue;
    });
  };

  calculateFinalPrice();
  roundedPrice = +finalPrice.toFixed([2]);
  globalContext.setFinalPrice(roundedPrice);

  return (
    <div
      className={`${props.additionalClasses} flex flex-row justify-between items-center`}
    >
      <BigTitle title="Total Amount: " />
      <BigTitle title={`$${globalContext.finalPrice}`} />
    </div>
  );
};

export default TotalAmount;
