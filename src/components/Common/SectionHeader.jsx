import PropTypes from "prop-types";

const SectionHeader = ({ subtitle, title }) => {
  return (
    <>
      <p className="text-blue-500 text-center">{subtitle}</p>
      <h2
        className="text-4xl font-bold mt-3 mb-10 text-center"
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        {title}
        <div className="flex justify-center mt-3">
          <div className="w-24 h-1 bg-blue-500"></div>
        </div>
      </h2>
    </>
  );
};

SectionHeader.propTypes = {
  subtitle: PropTypes.string,
  title: PropTypes.string,
};
export default SectionHeader;
