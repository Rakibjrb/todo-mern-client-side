import { Link } from "react-router-dom";
import bannerImage from "../../../../assets/banner-image.svg";
import "./banner.css";

const Banner = () => {
  return (
    <div className="banner-main lg:h-[calc(100vh-90px)] lg:flex lg:items-center py-14 lg:py-0">
      <div className="max-w-7xl mx-auto font-playpen px-3 md:px-4 xl:px-0">
        <div className="flex items-center flex-col lg:flex-row-reverse gap-10">
          <div className="flex-1 md:w-3/4 lg:w-full">
            <img src={bannerImage} alt="banner image" />
          </div>
          <div className="flex-1 text-white ">
            <h1 className="text-5xl font-semibold md:text-center lg:text-left">
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
