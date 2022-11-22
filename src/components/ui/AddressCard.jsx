import { SmallTitle } from "./Titles";

const AddressCard = (props) => {
  return (
    <div className="w-full">
      <div className="flex justify-center items-center md:justify-between text-center md:text-left flex-col-reverse md:flex-row lg:flex-row md:items-start lg:items-start">
        <div>
          <SmallTitle additionalClasses="my-2" title={props.unityName} />
          <p className="mb-1 font-arial">{props.addressLine1}</p>
          <p className="mb-1 font-arial">{props.addressLine2}</p>
          <p className="mb-1 font-arial">{props.addressLine3}</p>
          <div className="flex flex-row justify-center md:justify-start lg:justify-start my-2">
            <img
              src={
                props.elipseColor === "green"
                  ? "./assets/icons/green-elipse.svg"
                  : "./assets/icons/red-elipse.svg"
              }
              alt={
                props.elipseColor === "green" ? "green elipse" : "red elipse"
              }
              className="mr-2"
            />
            <p
              className={`${props.elipseColor === "green"
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
          className="w-7/12 sm:w-6/12 md:w-4/12 lg:w-5/12 rounded-lg"
        />
      </div>
      <div className="w-full h-0.5 my-3 bg-darkerGrey"></div>
    </div>
  );
};

export default AddressCard;
