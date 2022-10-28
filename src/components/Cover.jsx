import coverImage from "../assets/images/cover-image.png";
import arrowRightIcon from "../assets/icons/arrow-right.svg";

const Cover = () => {
  return (
    <div className="flex flex-row justify-between items-center bg-lightRed pt-14 pb-28">
      <div className="container w-2/4">
        <h1 className="text-6xl font-display font-black mx-16">
          We mix food and technology to deliver the best to your home.
        </h1>
        <button className="flex flex-row justify-center items-center w-64 h-16 rounded-lg bg-brightRed mx-16 mt-9 text-white font-text mb-16">
          <p>ORDER NOW</p>
          <img src={arrowRightIcon} alt="arrow poiting to the right" />
        </button>
      </div>
      <img
        src={coverImage}
        alt="smiling robot serving hamburger and soda"
        className="h-92 mx-16 mb-16"
      />
    </div>
  );
};

export default Cover;
