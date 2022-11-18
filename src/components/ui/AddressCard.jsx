import { SmallTitle } from "./Titles";

const AddressCard = (props) => {
  return (
    <div className="w-full">
      <div className="flex flex-row justify-between items-center">
        <div>
          <SmallTitle additionalClasses="my-2" title={props.unityName} />
          <p className="mb-1 font-arial">{props.addressLine1}</p>
          <p className="mb-1 font-arial">{props.addressLine2}</p>
          <p className="mb-1 font-arial">{props.addressLine3}</p>
          <div className="flex flex-row my-2">
            <img
              src={
                props.elipseColor === "green"
                  ? "/assets/icons/green-elipse.svg"
                  : "/assets/icons/red-elipse.svg"
              }
              alt={
                props.elipseColor === "green" ? "green elipse" : "red elipse"
              }
              className="mr-2"
            />
            <p
              className={`${
                props.elipseColor === "green"
                  ? "text-brightGreen"
                  : "text-brightRed"
              } mb-1 font-text`}
            >
              {props.elipseColor === "green" ? "Open" : "Closed"}
            </p>
          </div>
        </div>
        <img
          src={props.unityImage}
          alt={props.imageDescription}
          className="w-72 h-48 rounded-lg"
        />
      </div>
      <div className="w-full h-0.5 my-3 bg-darkerGrey"></div>
    </div>
  );
};

export default AddressCard;
