import Statistics from "./Statistics";
import { BigTitle, SmallTitle } from "./ui/Titles";
import useFetch from "../hooks/use-fetch";

const DeliveryProcess = () => {
  const steps = useFetch(
    "https://cooking-robot-f1d46-default-rtdb.firebaseio.com/deliveryProcess.json"
  );

  return (
    <div className="flex-col justify-center bg-softWhite relative pb-24">
      <Statistics />
      <BigTitle
        title="Delivery Process"
        additionalClasses="mt-48 text-center"
      />
      <ul className="flex flex-row justify-around mt-7 mx-16">
        {steps.map((step) => (
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
