import { BigTitle } from "./ui/Titles";

const Footer = () => {
  return (
    <div className="w-full bg-lightRed">
      <div className="flex flex-col-reverse text-center md:text-left md:flex-row justify-center items-center md:justify-around md:items-start py-7 px-7 sm:py-14 sm:px-14 md:gap-12">
        <div className="w-full md:w-1/3 flex flex-col">
          <BigTitle title="IMPORTANT NOTE" additionalClasses="mb-6 mt-6" />
          <div>
            <p className="mb-3.5">
              Cooking Robot is a fictional project made with the unique
              proporsal of putting my software development knowleges in pratice
              and everything is fictional.
            </p>
            <p className="mb-7">
              The code was fully made by me and I do own all of its rights.
              Illustrations were taken from StreamLine, icons were taken from
              Bootstrap Icons and the layout is fully inspired by Design
              Experience’s Dribbble layout.
            </p>
          </div>
          <div className="text-center">
            <div className="mb-3.5">
              <p className="text-center md:text-left font-bold">StreamLine</p>
              <p className="text-center md:text-left">https://www.streamlinehq.com/</p>
            </div>
            <div className="mb-3.5">
              <p className="text-center md:text-left font-bold">Bootstrap Icons</p>
              <p className="text-center md:text-left">https://icons.getbootstrap.com/</p>
            </div>
            <div className="mb-3.5">
              <p className="text-center md:text-left font-bold">Design Experience</p>
              <p className="text-center md:text-left">https://dribbble.com/Designexperiences/</p>
            </div>
          </div>
        </div>
        <div className=" w-full sm:w-6/12 md:1/3 flex flex-col">
          <BigTitle title="CONTACT ME" additionalClasses="mb-6 mt-6" />
          <div className="mb-3.5">
            <p className="font-bold	">Github</p>
            <p>https://github.com/lnobrz</p>
          </div>
          <div className="mb-3.5">
            <p className="font-bold	">Linkedin</p>
            <p>https://www.linkedin.com/in/lucas-nobrz/</p>
          </div>
          <div className="mb-3.5">
            <p className="font-bold	">Email</p>
            <p>lucasnobre37@outlook.com</p>
          </div>
        </div>
        <div className="w-4/12 sm:w-6/12 md:w-6/12 lg:w-4/12 xl:w-3/12">
          <img src="/assets/images/logo.png" alt="cooking robot logo" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
