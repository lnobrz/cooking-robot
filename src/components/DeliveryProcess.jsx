import { useEffect, useState, useCallback } from "react";
import Statistics from "./Statistics";
import { BigTitle, SmallTitle } from "./ui/Titles";

const DeliveryProcess = () => {
  const [steps, setSteps] = useState([]);

  const fetchSteps = useCallback(async () => {
    const response = await fetch(
      "https://cooking-robot-f1d46-default-rtdb.firebaseio.com/deliveryProcess.json"
    );
    const data = await response.json();
    for (const key in data) {
      setSteps(data[key]);
    }
  }, []);

  useEffect(() => {
    fetchSteps();
  }, [fetchSteps]);

  return (
    <div className="flex-col justify-center bg-softWhite relative pb-24">
      <Statistics />
      <BigTitle title="Delivery Process" additionalClasses="mt-48" />
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
