import { DisplayTitle } from "./ui/Titles";

const Cover = () => {

  return (
    <div className="flex flex-col-reverse justify-center lg:flex-row lg:justify-between lg:flex-nowrap bg-lightRed pt-14 pb-28 text-center items-center lg:items-start lg:text-left lg:mx-0  mb-16">
      <DisplayTitle
        title="We mix food and technology to deliver the best to your home."
        additionalClasses="w-10/12 xsm:w-8/12 sm:w-7/12 md:w-7/12 lg:w-6/12 xl:w-4/12 2xl:w-3/12"
      />
      <div className="">

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
