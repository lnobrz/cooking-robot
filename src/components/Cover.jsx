import { DisplayTitle } from "./ui/Titles";

const Cover = () => {

  const scrollToMenu = () => {
    window.location.replace("/#menu")
  }

  return (
    <div className="flex flex-row flex-wrap-reverse justify-center lg:justify-between lg:flex-nowrap bg-lightRed pt-14 pb-28">
      <div className="mx-16 text-center flex flex-col items-center justify-center lg:w-2/4 lg:justify-start lg:items-start lg:text-left lg:mx-0">
        <DisplayTitle
          title="We mix food and technology to deliver the best to your home."
          additionalClasses="w-full md:w-4/6"
        />
        <button className="flex flex-row justify-center items-center w-64 h-16 rounded-lg bg-brightRed md:mx-16 mt-9 text-white font-text mb-16" onClick={scrollToMenu}>
          <p>ORDER NOW</p>
          <img
            src="./assets/icons/arrow-right.svg"
            alt="arrow poiting to the right"
          />
        </button>
      </div>
      <img
        src="./assets/images/cover-image.png"
        alt="smiling robot serving hamburger and soda"
        className="w-8/12 xsm:w-6/12 sm:w-6/12 lg:w-5/12 xl:w-4/12 2xl:w-2/12 3xl-w-4/12 mx:0 md:mx-16 mb-16"
      />
    </div>
  );
};

export default Cover;
