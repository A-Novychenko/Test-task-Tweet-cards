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

export const Card = ({ user: { id, avatar, user, tweets, followers } }) => (
  <CardWrap>
    <Logo src={logo} alt={user} />
    <Wrap>
      <Background></Background>
    </Wrap>

    <AvatarBox>
      <Delimiter>
        <BorderAvatar>
          <BackgroundAvatar
            style={{ backgroundImage: avatar }}
          ></BackgroundAvatar>
        </BorderAvatar>
      </Delimiter>
    </AvatarBox>

    <Inner>
      <Statistics> {tweets} tweets</Statistics>
      <Statistics>{followers} Followers</Statistics>
      <Button type="button">Follow</Button>
    </Inner>
  </CardWrap>
);
