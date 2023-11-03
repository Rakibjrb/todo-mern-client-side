import Banner from "./HomeComponents/Banner/Banner";
import Benefits from "./HomeComponents/Benefits/Benefits";
import Features from "./HomeComponents/Features/Features";
import Welcome from "./HomeComponents/Welcome/Welcome";

const Home = () => {
  return (
    <div>
      <Banner />
      <Welcome />
      <Features />
      <Benefits />
    </div>
  );
};

export default Home;
