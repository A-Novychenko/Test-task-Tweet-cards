import logo from '../../img/logo.png';
// import bgImg from '../../img/background.png';
import {
  Background,
  BorderAvatar,
  Button,
  CardWrap,
  Delimiter,
  Inner,
  Statistics,
  AvatarBox,
  BackgroundAvatar,
  Logo,
  Wrap,
} from './Card.styled';

export const Card = () => (
  <CardWrap>
    <Logo src={logo} alt="logo" />
    <Wrap>
      <Background></Background>
    </Wrap>

    <AvatarBox>
      <Delimiter>
        <BorderAvatar>
          <BackgroundAvatar></BackgroundAvatar>
        </BorderAvatar>
      </Delimiter>
    </AvatarBox>

    <Inner>
      <Statistics> 777 tweets</Statistics>
      <Statistics>100,500 Followers</Statistics>
      <Button type="button">Follow</Button>
    </Inner>
  </CardWrap>
);
