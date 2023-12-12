import axios from "axios";
import { useEffect, useState } from "react";
import Feature from "./Feature";
import SectionHeader from "../../../../components/Common/SectionHeader";

const Features = () => {
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    axios.get("./features.json").then((res) => setFeatures(res.data));
  }, []);

  return (
    <div
      className="max-w-7xl mx-auto px-3 xl:px-0 mt-24 lg:mt-10"
      data-aos="fade-up"
      data-aos-duration="800"
    >
      <div className="font-playpen">
        <SectionHeader subtitle={"#Features"} title={"Our Features"} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features?.map((feature, index) => (
            <Feature key={index} feature={feature} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
