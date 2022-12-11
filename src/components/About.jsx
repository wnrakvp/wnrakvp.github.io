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
    <div className="m-5 lg:flex-col lg:m-10 ">
      <section className="mb-5">
        <p className="text-2xl lg:text-3xl">About Me</p>
        <div className="flex">
          <img
            alt="Developer"
            src={profilePicture}
            className="rounded-2xl max-w-xs object-cover ml-0 m-5"
          />

          {/* <div className="mt-0">
            <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
              <p className="text-sm text-white">
                I'm a Self-Taught Developer. Currently I'm studying Master
                Degree in Software Engineering at Chulalongkorn University.
                Interesting in Software Development (Cloud-Native) & Cloud
                Computing
              </p>
            </div>
          </div> */}
          <div className="flex-col">
            <TypeAnimation
              sequence={["Wannarat Arkardvipart", 1000]}
              className="text-sm md:text-md lg:text-3xl tracking-widest "
              repeat={2}
              deletionSpeed={60}
            />
            <div className="flex gap-2 my-2">
              <div className="border bg-gray-100 p-3 rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                  className="w-5 h-5"
                >
                  <path
                    fill="currentColor"
                    d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                  />
                </svg>
              </div>
              <div className="border bg-gray-100 p-3 rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  className="w-5 h-5"
                >
                  <path
                    fill="currentColor"
                    d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                  />
                </svg>
              </div>
              <div className="border bg-gray-100 p-3 rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 496 512"
                  className="w-5 h-5"
                >
                  <path
                    fill="currentColor"
                    d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                  />
                </svg>
              </div>
            </div>
            <p className="text-md border p-2 rounded-lg max-w-md">
              I'm a Self-Taught Developer. Currently I'm studying Master Degree
              in Software Engineering at Chulalongkorn University. Interesting
              in Software Development (Cloud-Native) & Cloud Computing
            </p>
          </div>
        </div>
      </section>
      <div className="flex">
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
          <div className="grid grid-cols-3 gap-5 my-5 border p-2 rounded-lg">
            <img src={htmlLogo} alt="html" className="h-16 w-16 m-auto" />
            <img src={cssLogo} alt="css" className="h-16 w-16 m-auto" />
            <img src={jsLogo} alt="js" className="h-16 w-16 m-auto" />
            <img src={reactLogo} alt="react" className="h-16 w-16 m-auto" />
            <img
              src={tailwindLogo}
              alt="tailwind"
              className="h-16 w-16 m-auto"
            />
            <img src={nodejsLogo} alt="NodeJS" className="h-16 w-16 m-auto" />
            <img src={restapiLogo} alt="REST" className="h-16 w-16 m-auto" />
          </div>
        </section>
      </div>
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
