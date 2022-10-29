import Statistics from "./Statistics";

const DeliveryProcess = () => {
  const deliverySteps = [
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
  ];
  return (
    <div className="flex-col justify-center bg-softWhite relative pb-24">
      <Statistics />
      <h2 className="font-display text-3xl text-center mt-48">
        Delivery Process
      </h2>
      <div className="flex flex-row justify-around mt-7 mx-16">
        {deliverySteps.map((step) => (
          <div className="flex flex-col justify-center items-center">
            <img
              src={step.image}
              alt={step.imageDescription}
              className="w-80 h-80"
            />
            <p className="text-base font-display font-black">{step.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeliveryProcess;
