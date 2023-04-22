import { CardItem } from 'components/CardItem/CardItem';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsFollowingUsers } from 'redux/isFollowing/isFollowingSelectors';
import {
  addFollowing,
  removeFollowing,
} from 'redux/isFollowing/isFollowingSlice';

import {
  changeQuantityFollower,
  fetchUsers,
} from 'redux/users/usersOperations';
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

  const handleClickBtn = ({ id, followers }) => {
    const inFollowers = IsFollowingUsers.includes(id);
    console.log('inFollowers', inFollowers);

    if (inFollowers) {
      dispatch(removeFollowing(id));
      dispatch(changeQuantityFollower({ id, followers: followers - 1 }));
    }
    if (!inFollowers) {
      dispatch(addFollowing(id));
      dispatch(changeQuantityFollower({ id, followers: followers + 1 }));
    }
  };

  return (
    <ul>
      {visibleUsers &&
        visibleUsers.map(user => (
          <CardItem key={user.id} user={user} handleClickBtn={handleClickBtn} />
        ))}
    </ul>
  );
};
