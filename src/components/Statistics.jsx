const Statistics = () => {
  const statisticsData = [
    {
      key: "s1",
      name: "completed orders",
      amount: "987",
      elipseIcon: "/assets/icons/green-elipse.svg",
      iconDescription: "green elipse",
    },
    {
      key: "s2",
      name: "satisfied clients",
      amount: "99.3%",
      elipseIcon: "/assets/icons/green-elipse.svg",
      iconDescription: "green elipse",
    },
    {
      key: "s3",
      name: "awards owned",
      amount: "27",
      elipseIcon: "/assets/icons/yellow-elipse.svg",
      iconDescription: "yellow elipse",
    },
  ];

  return (
    <div className="w-9/12 bg-softWhite flex flex-row justify-evenly items-center rounded-lg shadow-lg absolute -top-72 py-14 z-10 m-auto left-0 right-0">
      <div>
        <div className="flex flex-row justify-center items-center">
          <img src="/assets/icons/green-elipse.svg" alt="green circle" />
          <p className="font-display text-2xl text-center ml-2.5">
            COMPLETED ORDERS
          </p>
        </div>
        <p className="font-display text-6xl text-center mt-2.5">987</p>
      </div>
      <div>
        <div className="flex flex-row justify-center items-center">
          <img src="/assets/icons/green-elipse.svg" alt="green circle" />
          <p className="font-display text-2xl text-center ml-2.5">
            SATISFIED CLIENTS
          </p>
        </div>
        <p className="font-display text-6xl text-center mt-2.5">99.3%</p>
      </div>
      <div>
        <div className="flex flex-row justify-center items-center">
          <img src="/assets/icons/yellow-elipse.svg" alt="yellow circle" />
          <p className="font-display text-2xl text-center ml-2.5">
            AWARDS OWNED
          </p>
        </div>
        <p className="font-display text-6xl text-center mt-2.5">99.3%</p>
      </div>
    </div>
  );
};

export default Statistics;
