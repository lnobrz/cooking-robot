import { BigTitle } from "./ui/Titles";

const Footer = () => {
  return (
    <div className=" bg-lightRed">
      <div className="flex flex-row justify-around items-start mx-14 ">
        <div className="w-1/3 flex flex-col mt-20">
          <BigTitle title="IMPORTANT NOTE" additionalClasses="mb-6" />
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
          <div>
            <div className="mb-3.5">
              <p>StreamLine</p>
              <p>https://www.streamlinehq.com/</p>
            </div>
            <div className="mb-3.5">
              <p>Bootstrap Icons</p>
              <p>https://icons.getbootstrap.com/</p>
            </div>
            <div className="mb-3.5">
              <p>Design Experience</p>
              <p>https://dribbble.com/Designexperiences/</p>
            </div>
          </div>
        </div>
        <div className="w-1/3 flex flex-col mt-20">
          <BigTitle title="CONTACT ME" additionalClasses="mb-6" />
          <div className="mb-3.5">
            <p>Github</p>
            <p>https://github.com/lnobrz</p>
          </div>
          <div className="mb-3.5">
            <p>Linkedin</p>
            <p>https://www.linkedin.com/in/lucas-nobrz/</p>
          </div>
          <div className="mb-3.5">
            <p>Email</p>
            <p>lucasnobre37@outlook.com</p>
          </div>
        </div>
        <div className="mt-20">
          <img src="/assets/images/logo.png" alt="cooking robot logo" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
