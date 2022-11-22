import AddressCard from "./ui/AddressCard";
import { BigTitle } from "./ui/Titles";

const PopularItems = () => {
  return (
    <div className="flex flex-col">
      <BigTitle
        additionalClasses="mt-16 text-center"
        title="Find the nearest Cooking Robot"
      />
      <div className="flex flex-row md:flex-nowrap md:justify-between items-center m-16">
        <img src="./assets/images/map-illustration.png" alt="map illustration" className="hidden lg:block" />
        <div className="w-full md:w-full lg:w-3/6">
          <AddressCard
            unityName="Cooking Robot Fortaleza"
            addressLine1="Honeymoon Avenue, 2089"
            addressLine2="Fortaleza, Ceará, Brazil"
            addressLine3="Opens 10AM - Closes 23PM"
            elipseColor="green"
            unityImage="./assets/images/cooking-robot-fortaleza.webp"
            imageDescription="Cooking Robot Fortaleza unity"
          />
          <AddressCard
            unityName="Cooking Robot Fortaleza"
            addressLine1="La Petit Avenue, 4023"
            addressLine2="Paris, France"
            addressLine3="Opens 18PM - Closes 3AM"
            elipseColor="red"
            unityImage="./assets/images/cooking-robot-france.webp"
            imageDescription="Cooking Robot France unity"
          />
          <AddressCard
            unityName="Cooking Robot London"
            addressLine1="Downing Street, 43"
            addressLine2="London, UK"
            addressLine3="Opens 7AM - Closes 1AM"
            elipseColor="green"
            unityImage="./assets/images/cooking-robot-london.webp"
            imageDescription="Cooking Robot London unity"
          />
        </div>
      </div>
    </div>
  );
};

export default PopularItems;
