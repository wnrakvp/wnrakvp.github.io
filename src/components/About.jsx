import { TypeAnimation } from "react-type-animation";
import profilePicture from "../assets/myProfilePicture.jpg";
import reactLogo from "../assets/react.svg";
import tailwindLogo from "../assets/tailwindcss.svg";
import jsLogo from "../assets/js.svg";
import htmlLogo from "../assets/html.svg";
import cssLogo from "../assets/css.svg";
import nodejsLogo from "../assets/nodejs.svg";
import restapiLogo from "../assets/restapi.svg";
// import googleLogo from "../assets/google_cloud.svg";
import gcpCdl from "../assets/GCP-CDL.png";

const About = () => {
  return (
    <div className="m-5 lg:flex lg:m-10 ">
      <section className="flex-col">
        <p className="text-2xl lg:text-3xl">Certificates</p>
        <div className="flex my-5 max-w-md">
          <img
            src={gcpCdl}
            alt="gcpcdl"
            className="w-1/3 border-2 p-1 rounded-lg"
          />
          <div className="flex flex-col justify-between m-2">
            <p className="mx-auto">Google Cloud Certified</p>
            <p className="text-2xl font-extrabold mx-auto">
              Cloud Digital Leader
            </p>
            <a
              href="https://www.credential.net/91895e85-8859-459e-a916-170629b7437b"
              className="hover:text-blue-600 hover:underline ml-auto"
            >
              <div className="flex">
                <p>My Credentials</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 ml-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                  />
                </svg>
              </div>
            </a>
          </div>
        </div>
        <div className="flex my-5 max-w-lg">
          {/* <img
            src={gcpCdl}
            alt="gcpcdl"
            className="w-1/3 border-2 p-1 rounded-lg"
          /> */}
          <p className="mx-auto text-xl">Upcoming. . .</p>
        </div>
      </section>
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
      {/* <section>
        <p className="text-2xl lg:text-3xl">Interests</p>
        <div className="flex flex-col gap-4 my-5 border p-2 rounded-lg">
          <img src={googleLogo} alt="REST" />
        </div>
      </section> */}
    </div>
  );
};

export default About;
