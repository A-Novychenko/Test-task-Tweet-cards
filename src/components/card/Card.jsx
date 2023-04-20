import logo from '../../img/logo.png';
// import bgImg from '../../img/background.png';
import {
  Background,
  Button,
  CardWrap,
  Delimiter,
  Inner,
  Statistics,
} from './Card.styled';

export const Card = () => (
  <CardWrap>
    <div>
      <img src={logo} alt="logo" width="76" height="22" />
    </div>
    <Background />

    <Delimiter>
      <div></div>
    </Delimiter>

    <Inner>
      <Statistics> 777 tweets</Statistics>
      <Statistics>100,500 Followers</Statistics>
      <Button type="button">Follow</Button>
    </Inner>
  </CardWrap>
);
