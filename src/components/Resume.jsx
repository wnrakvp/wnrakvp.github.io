import { Timeline, Button, Card, Badge, Carousel } from "flowbite-react";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import tgLogo from "../assets/TGlogo.svg";
import coolbeanLogo from "../assets/coolbeans.png";
import { motion } from "framer-motion";
const Resume = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="m-5 lg:flex h-full lg:m-10 lg:justify-between">
      <section className="lg:max-w-xl">
        <p className="text-2xl lg:text-3xl">Working Experience</p>
        <Card className="my-5 lg:mr-10 flex">
          <Badge color="success" className="w-min">
            Currently
          </Badge>
          <img src={tgLogo} alt="TG logo" className="w-64 h-32 mx-auto" />
          <h5 className="text-xl text-gray-900 lg:text-2xl dark:text-white">
            Co-Pilot A330-300
          </h5>
          <p className="text-sm text-gray-500 lg:text-base">
            Thai Airways International <br />
            (2017 - Present)
          </p>
          <p className="text-sm text-gray-700 lg:text-base dark:text-gray-400">
            THAI operates the airlines business as a full service carrier. I fly
            A330-300 (Airbus) which operates in regional Asia/Australia and also
            develop IT solution for Pilot Administration Department
          </p>
          <Button onClick={() => setIsOpen(true)}>
            Read More
            <svg
              className="ml-2 -mr-1 h-4 w-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Button>
        </Card>
        <Card className="my-5 lg:mr-10 flex">
          <img src={coolbeanLogo} alt="TG logo" className="w-32 h-32 mx-auto" />
          <h5 className="text-xl text-gray-900 lg:text-2xl dark:text-white">
            Co-Founder of Cool Beans Coffee
          </h5>
          <p className="text-sm text-gray-500 lg:text-base">
            Self-employed <br />
            (2019 - 2021)
          </p>
          <p className="text-sm text-gray-700 lg:text-base dark:text-gray-400">
            The online coffee shop delivered Thai single-origin coffee from
            lesser-known location to coffeelism in the city.
          </p>
          <Button>
            Read More
            <svg
              className="ml-2 -mr-1 h-4 w-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Button>
        </Card>
      </section>
      <section>
        <p className="text-2xl lg:text-3xl">Education</p>
        <Timeline className="mt-5">
          <Timeline.Item>
            <Timeline.Point />
            <Timeline.Content>
              <div className="flex gap-3">
                <Timeline.Time>2021 - Present</Timeline.Time>
                <Badge color="success" className="w-min mb-1">
                  Currently
                </Badge>
              </div>
              <Timeline.Title className="font-light">
                Chulalongkorn University
              </Timeline.Title>
              <Timeline.Body>Master of Software Engineering.</Timeline.Body>
            </Timeline.Content>
          </Timeline.Item>
          <Timeline.Item>
            <Timeline.Point />
            <Timeline.Content>
              <Timeline.Time>2016 - 2017</Timeline.Time>
              <Timeline.Title className="font-light">
                Civil Aviation Training Center (CATC)
              </Timeline.Title>
              <Timeline.Body>
                Commercial Pilot - Airplane course (CPL)
              </Timeline.Body>
            </Timeline.Content>
          </Timeline.Item>
          <Timeline.Item>
            <Timeline.Point />
            <Timeline.Content>
              <Timeline.Time>2011 - 2015</Timeline.Time>
              <Timeline.Title className="font-light">
                Kasetsart University
              </Timeline.Title>
              <Timeline.Body>Bachelor of Chemical Engineering.</Timeline.Body>
            </Timeline.Content>
          </Timeline.Item>
          <Timeline.Item>
            <Timeline.Point />
            <Timeline.Content>
              <Timeline.Time>1999-2010</Timeline.Time>
              <Timeline.Title className="font-light">
                Kasetsart University Laboratory School
              </Timeline.Title>
              <Timeline.Body>Mathematic-Science Program.</Timeline.Body>
            </Timeline.Content>
          </Timeline.Item>
        </Timeline>
      </section>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Dialog.Panel className="mx-auto max-w-sm rounded bg-white font-quicksand">
                <Dialog.Title>Deactivate account</Dialog.Title>
                <Dialog.Description>
                  This will permanently deactivate your account
                </Dialog.Description>

                <p>
                  Are you sure you want to deactivate your account? All of your
                  data will be permanently removed. This action cannot be
                  undone.
                </p>
                <button onClick={() => setIsOpen(false)}>Deactivate</button>
                <button onClick={() => setIsOpen(false)}>Cancel</button>
              </Dialog.Panel>
            </motion.div>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default Resume;
