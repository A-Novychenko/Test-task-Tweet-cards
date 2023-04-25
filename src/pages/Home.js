import { useLocation } from 'react-router-dom';
import { HomeContent } from 'components/HomeContetnt';

const Home = () => {
  const location = useLocation();
  return <HomeContent location={location} />;
};

export default Home;
