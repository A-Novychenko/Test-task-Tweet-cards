import { Title, Descr, StartLink } from './HomeContetnt.styled';

export const HomeContent = ({ location }) => {
  return (
    <>
      <Title>Tweets</Title>
      <Descr>A beautifully designed tweeter with interactive buttons.</Descr>
      <StartLink to={location.state?.from ?? '/tweets'}>get started</StartLink>
    </>
  );
};
