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
} from './CardItem.styled';

export const CardItem = ({
  user: { id, avatar, user, tweets, followers, isFollowing },
  handleClickBtn,
}) => (
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
      <Button
        type="button"
        onClick={() => {
          handleClickBtn({ id, followers });
        }}
        isFollowing={isFollowing}
      >
        {isFollowing ? 'Following' : 'Follow'}
      </Button>
    </Inner>
  </CardWrap>
);
