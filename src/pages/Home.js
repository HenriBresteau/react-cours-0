import Contries from "../components/Contries";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";

const Home = () => {
  return (
    <div className="home">
      <Navigation></Navigation>
      <Logo></Logo>
      <Contries></Contries>
    </div>
  );
};

export default Home;
