import ItemText from "./ItemText";
import AmountInput from "./AmountInput";
import Decoration from "./ui/Decoration";
import { useContext } from "react";
import { GlobalContext } from "../storage/global";

const ItemInfo = (props) => {
  const globalContext = useContext(GlobalContext);

  const handleClick = () => {
    const filteredArray = globalContext.cart.filter(
      (item) => item.id !== props.id
    );
    globalContext.setCart(filteredArray);
  };

  return (
    <div className={`${props.additionalClasses} flex flex-col`}>
      <div className="flex flex-row justify-between">
        <ItemText name={props.name} price={props.price} />
        <div className="flex flex-row items-center">
          <AmountInput
            additionalClasses="border border-brightRed text-brightRed w-32 h-12 mt-3.5 mr-3.5"
            name={props.name}
            price={props.price}
            isCart={props.isCart}
            index={props.index}
          />
          <button
            className="flex flex-col justify-center items-center bg-brightRed rounded-sm h-12 w-12 mt-3.5"
            onClick={handleClick}
          >
            <img src="/assets/icons/exclude-icon.svg" alt="close icon" />
          </button>
        </div>
      </div>
      <Decoration additionalClasses="mt-6" />
    </div>
  );
};

export default ItemInfo;
