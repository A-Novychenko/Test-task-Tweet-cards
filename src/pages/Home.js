import { HomeContent } from 'components/HomeContetnt';
import { useLocation } from 'react-router-dom';

const Home = () => {
  const location = useLocation();
  return <HomeContent location={location} />;
};

export default Home;
