import { CardTEST } from '../Card/CardTEST';
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

  return (
    <ul>
      {users && users.map(user => <CardTEST key={user.id} user={user} />)}
    </ul>
  );
};
