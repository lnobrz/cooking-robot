import { BigTitle, SmallTitle } from "./ui/Titles";

const ItemText = (props) => {
  return (
    <div className="flex flex-col justify-start items-start">
      <BigTitle title={props.name} additionalClasses="mt-3.5"></BigTitle>
      <SmallTitle
        preText="$"
        title={props.price}
        additionalClasses="text-brightRed"
      ></SmallTitle>
    </div>
  );
};

export default ItemText;
