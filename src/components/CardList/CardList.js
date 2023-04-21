import { CardItem } from 'components/CardItem';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchUsers } from 'redux/users/usersOperations';
import { selectUsers } from 'redux/users/usersSelectors';

export const CardList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const users = useSelector(selectUsers);

  console.log('users', users);

  return (
    <ul>
      {users &&
        users.map(user => (
          <li key={user.id}>
            <CardItem user={user} />
          </li>
        ))}
    </ul>
  );
};
