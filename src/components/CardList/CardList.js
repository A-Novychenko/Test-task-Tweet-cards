import { CardItem } from 'components/CardItem/CardItem';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsFollowingUsers } from 'redux/isFollowing/isFollowingSelectors';
import { addFollowing } from 'redux/isFollowing/isFollowingSlice';

import { fetchUsers } from 'redux/users/usersOperations';
import { selectUsers } from 'redux/users/usersSelectors';

export const CardList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const users = useSelector(selectUsers);
  const IsFollowingUsers = useSelector(selectIsFollowingUsers);

  const visibleUsers = users.map(user => {
    const isFollowing = IsFollowingUsers.some(el => el === user.id);
    if (isFollowing) {
      return { ...user, isFollowing: true };
    }
    return { ...user, isFollowing: false };
  });

  console.log('visibleUsers', visibleUsers);

  const handleClickBtn = id => {
    dispatch(addFollowing(id));
  };

  return (
    <ul>
      {visibleUsers &&
        visibleUsers.map(user => (
          <li key={user.id}>
            <CardItem user={user} handleClickBtn={handleClickBtn} />
          </li>
        ))}
    </ul>
  );
};
