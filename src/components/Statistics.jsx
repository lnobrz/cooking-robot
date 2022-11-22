import { useMemo } from "react";
const Statistics = () => {
  const statisticsData = useMemo(
    () => [
      {
        key: "s1",
        name: "completed orders",
        amount: "987",
        elipseIcon: "./assets/icons/green-elipse.svg",
        iconDescription: "green elipse",
      },
      {
        key: "s2",
        name: "satisfied clients",
        amount: "99.3%",
        elipseIcon: "./assets/icons/green-elipse.svg",
        iconDescription: "green elipse",
      },
      {
        key: "s3",
        name: "awards owned",
        amount: "27",
        elipseIcon: "./assets/icons/yellow-elipse.svg",
        iconDescription: "yellow elipse",
      },
    ],
    []
  );

  return (
    <ul className="w-11/12 md:w-9/12 bg-softWhite flex flex-col justify-center md:justify-evenly items-center rounded-lg shadow-lg relative -top-36 py-14 z-10 m-auto left-0 right-0  md:flex-row">
      {statisticsData.map((statistic) => (
        <li key={statistic.key}>
          <div className="flex flex-row justify-start items-start md:items-center md:gap-2">
            <img src={statistic.elipseIcon} alt={statistic.iconDescription} className="mx-4 my-1.5 md:mt-0 md:mr-1" />
            <p className="font-display text-2xl text-start md:text-center leading-none">
              {statistic.name.toUpperCase()}
            </p>
          </div>
          <p className="font-display text-5xl md:text-6xl text-center mt-2.5 mb-6 md:mb-0">
            {statistic.amount.toUpperCase()}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default Statistics;
