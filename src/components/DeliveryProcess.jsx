import illustration1 from "../assets/images/dp-illustration-1.png";
import illustration2 from "../assets/images/dp-illustration-2.png";
import illustration3 from "../assets/images/dp-illustration-3.png";
import illustration4 from "../assets/images/cover-image.png";

import Statistics from "./Statistics";

const DeliveryProcess = () => {
  return (
    <div className="flex-col justify-center bg-softWhite relative pb-24">
      <Statistics />
      <h2 className="font-display text-3xl text-center mt-48">
        Delivery Process
      </h2>
      <div className="flex flex-row justify-around mt-7 mx-16">
        <div className="flex flex-col justify-center items-center">
          <img
            src={illustration1}
            alt="hand grabbing a phone"
            className="w-80 h-80"
          />
          <p className="text-base font-display font-black">
            Order in any device
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img src={illustration2} alt="robot cooking" className="w-80 h-80" />
          <p className="text-base font-display font-black">
            Cookbot will prepair
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img
            src={illustration3}
            alt="flying drone deliverying a box"
            className="w-80 h-80"
          />
          <p className="text-base font-display font-black">
            Super-drones will deliver
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img
            src={illustration4}
            alt="robot serving hamburger and soda"
            className="w-80 h-80"
          />
          <p className="text-base font-display font-black">
            You will enjoy your meal
          </p>
        </div>
      </div>
    </div>
  );
};

export default DeliveryProcess;
