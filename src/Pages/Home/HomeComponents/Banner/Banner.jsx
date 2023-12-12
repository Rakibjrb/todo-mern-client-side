import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect/dist/core";
import bannerImage from "../../../../assets/banner-image1.svg";
import "./banner.css";
import { useEffect } from "react";

const Banner = () => {
  useEffect(() => {
    const bannerTitle = document.getElementById("banner-title");
    new Typewriter(bannerTitle, {
      strings: [
        "Organize Your Life with 'List Legend'",
        "Achieve Your Goals, One Task at a Time",
        "Never Miss a Deadline Again",
      ],
      autoStart: true,
      loop: true,
      delay: 75,
    });
  }, []);

  return (
    <div className="banner-main mb-10 lg:h-screen lg:flex lg:items-center py-14 lg:py-0 2xl:h-[calc(90vh-90px)]">
      <div className="max-w-7xl mx-auto font-playpen px-3 md:px-4 xl:px-0">
        <div className="flex items-center flex-col lg:flex-row-reverse gap-10">
          <div className="flex-1 md:w-3/4 lg:w-full flex justify-center">
            <img
              className="h-[450px] animate-css"
              src={bannerImage}
              alt="banner image"
            />
          </div>
          <div className="flex-1 text-white ">
            <h1
              id="banner-title"
              className="text-5xl font-semibold md:text-center lg:text-left"
            >
              Achieve Your Goals, One Task at a Time
            </h1>
            <p className="mt-5 mb-10 md:text-center lg:text-left">
              Welcome to list legend, your ultimate task management solution.
              Effortlessly organize your tasks, set priorities, and stay on top
              of your to-do list.
            </p>
            <div className="md:flex md:justify-center lg:justify-start">
              <Link className="btn btn-primary ">Get Started</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
