import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import benefitsImg from "../../../../assets/benefit.svg";
import Benefit from "./Benefit";

const Benefits = () => {
  const [benefits, setBenefits] = useState([]);

  useEffect(() => {
    axios.get("./benefits.json").then((res) => setBenefits(res.data));
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-3 xl:px-0 font-playpen mt-32">
      <div className="flex flex-col-reverse lg:flex-row gap-5 items-center">
        <div className="flex-1" data-aos="fade-right">
          <p className="text-blue-500">#Benefits</p>
          <h2
            className="text-4xl font-bold mt-2 mb-3"
            data-aos="flip-left"
            data-aos-duration="2000"
          >
            Experience the Benefits of Task Management
          </h2>
          <p>
            Boost productivity, reduce stress, and achieve your goals
            effortlessly
          </p>
          <div className="mt-10 space-y-5">
            {benefits?.slice(0, 3).map((benefit, index) => (
              <Benefit key={index} benefit={benefit} />
            ))}
          </div>
          <NavLink to="/more-benefits" className="btn btn-primary mt-14">
            Read More
          </NavLink>
        </div>
        <div className="flex-1" data-aos="fade-left">
          <img src={benefitsImg} alt="Benefits image" />
        </div>
      </div>
    </div>
  );
};

export default Benefits;
