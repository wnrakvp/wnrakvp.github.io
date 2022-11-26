import { TypeAnimation } from "react-type-animation";
import profilePicture from "../assets/myProfilePicture.jpg";
import reactLogo from "../assets/react.svg";
import tailwindLogo from "../assets/tailwindcss.svg";
import jsLogo from "../assets/js.svg";
import htmlLogo from "../assets/html.svg";
import cssLogo from "../assets/css.svg";
import nodejsLogo from "../assets/nodejs.svg";
import restapiLogo from "../assets/restapi.svg";
import googleLogo from "../assets/google_cloud.svg";
import { Progress } from "flowbite-react";

const About = () => {
  return (
    <div className="m-5 lg:flex lg:m-10 ">
      <section>
        <p className="text-2xl lg:text-3xl">Skills</p>
        <div className="flex flex-col gap-4 my-5 border p-2 rounded-lg">
          <div className="flex gap-4">
            <img src={htmlLogo} alt="html" className="h-16 w-16 m-auto" />
            <img src={cssLogo} alt="css" className="h-16 w-16 m-auto" />
            <img src={jsLogo} alt="js" className="h-16 w-16 m-auto" />
          </div>
          <div className="flex gap-4">
            <img src={reactLogo} alt="react" className="h-16 w-16 m-auto" />
            <img
              src={tailwindLogo}
              alt="tailwind"
              className="h-16 w-16 m-auto"
            />
          </div>
          <div className="flex gap-4">
            <img src={nodejsLogo} alt="NodeJS" className="h-16 w-16 m-auto" />
            <img src={restapiLogo} alt="REST" className="h-16 w-16 m-auto" />
          </div>
        </div>
      </section>
      <section>
        <p className="text-2xl lg:text-3xl">Interests</p>
        <div className="flex flex-col gap-4 my-5 border p-2 rounded-lg">
          <img src={googleLogo} alt="REST" />
        </div>
      </section>
    </div>
  );
};

export default About;
