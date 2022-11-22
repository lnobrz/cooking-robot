import Statistics from "./Statistics";
import { BigTitle, SmallTitle } from "./ui/Titles";
import useFetch from "../hooks/use-fetch";
import { useState, useEffect } from "react";

const DeliveryProcess = () => {
  const [loading, setLoading] = useState(true);

  const steps = useFetch(
    "https://cooking-robot-f1d46-default-rtdb.firebaseio.com/deliveryProcess.json"
  );

  useEffect(() => {
    if (steps) {
      setLoading(false)
    }
  }, [steps])

  return (
    <div className="flex-col justify-center items-center bg-softWhite relative pb-24">
      <Statistics />
      <BigTitle
        title="Delivery Process"
        additionalClasses="text-center"
      />
      <ul className="flex flex-row flex-wrap justify-center items-center md:flex-nowrap md:justify-around mt-7">
        {loading ? <SmallTitle title="loading..." additionalClasses="mt-9" /> : (Array.isArray(steps)) ? steps.map((step) => (
          <li
            className="flex flex-col justify-center items-center mt-14 w-full"
            key={step.name}
          >
            <img
              src={step.image}
              alt={step.imageDescription}
              className="w-6/12 md:w-10/12 lg:w-8/12"
            />
            <SmallTitle title={step.name} additionalClasses="mt-3 w-auto" />
          </li>
        )) : <BigTitle title={steps} additionalClasses="text-brightRed mt-9" />}
      </ul>
    </div>
  );
};

export default DeliveryProcess;
