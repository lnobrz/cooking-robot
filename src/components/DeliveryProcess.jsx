import { useMemo } from "react";
import Statistics from "./Statistics";
import { BigTitle, SmallTitle } from "./ui/Titles";

const DeliveryProcess = () => {
  const deliverySteps = useMemo(
    () => [
      {
        name: "order in any device",
        image: "/assets/images/dp-illustration-1.png",
        imageDescription: "hand grabbing a phone",
      },
      {
        name: "cookbot will prepair",
        image: "/assets/images/dp-illustration-2.png",
        imageDescription: "robot cooking",
      },
      {
        name: "super-drones will deliver",
        image: "/assets/images/dp-illustration-3.png",
        imageDescription: "flying drone deliverying a box",
      },
      {
        name: "you'll enjoy your meal",
        image: "/assets/images/cover-image.png",
        imageDescription: "robot serving hamburger and soda",
      },
    ],
    []
  );

  return (
    <div className="flex-col justify-center bg-softWhite relative pb-24">
      <Statistics />
      <BigTitle title="Delivery Process" additionalClasses="mt-48" />
      <ul className="flex flex-row justify-around mt-7 mx-16">
        {deliverySteps.map((step) => (
          <li
            className="flex flex-col justify-center items-center"
            key={step.name}
          >
            <img
              src={step.image}
              alt={step.imageDescription}
              className="w-80 h-80"
            />
            <SmallTitle title={step.name} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DeliveryProcess;
