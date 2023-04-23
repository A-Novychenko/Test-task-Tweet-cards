import { CardItem } from 'components/CardItem/CardItem';
import { List } from './CardList.styled';

export const CardList = ({ currentUsers, handleClickBtn }) => {
  return (
    <List>
      {currentUsers &&
        currentUsers.map(user => (
          <CardItem key={user.id} user={user} handleClickBtn={handleClickBtn} />
        ))}
    </List>
  );
};
