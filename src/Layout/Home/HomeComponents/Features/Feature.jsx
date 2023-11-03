import PropTypes from "prop-types";
import "./feature.css";

const Feature = ({ feature }) => {
  const { img, title, description } = feature;
  return (
    <div data-aos="fade-up" data-aos-duration="800">
      <div className="bg-base-200 pt-5 pb-7 px-5 rounded-xl transition-effect transition-all duration-400 hover:bg-base-300 shadow-lg">
        <img className="w-3/5 mx-auto" src={img} alt={title} />
        <div className="text-center p-5">
          <h3 className="text-2xl font-bold my-4">{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

Feature.propTypes = {
  feature: PropTypes.object,
};
export default Feature;
