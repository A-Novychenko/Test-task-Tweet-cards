import { CardItem } from 'components/CardItem/CardItem';
import { useEffect, useState } from 'react';
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
import { List, ListWrapper, Button } from './CardList.styled';
import { Link } from 'react-router-dom';

export const CardList = () => {
  const [visibleUsers, setVisibleUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentUsers, setCurrentUsers] = useState([]);
  const [userPerPage] = useState(3);

  const dispatch = useDispatch();
  const allUsers = useSelector(selectUsers);
  const IsFollowingList = useSelector(selectIsFollowingUsers);
  const lastIdx = currentPage * userPerPage;
  const totalPage = visibleUsers.length / userPerPage;

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  useEffect(() => {
    setCurrentUsers([...visibleUsers].slice(0, lastIdx));
  }, [lastIdx, visibleUsers]);

  useEffect(() => {
    const hendleUsers = allUsers.map(user => {
      const isFollowing = IsFollowingList.some(el => el === user.id);
      if (isFollowing) {
        return { ...user, isFollowing: true };
      }
      return { ...user, isFollowing: false };
    });

    setVisibleUsers(hendleUsers);
  }, [IsFollowingList, allUsers]);

  const handleClickBtn = ({ id, followers }) => {
    const inFollowers = IsFollowingList.includes(id);
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
    <ListWrapper>
      <Link to="/">Back</Link>
      <List>
        {currentUsers &&
          currentUsers.map(user => (
            <CardItem
              key={user.id}
              user={user}
              handleClickBtn={handleClickBtn}
            />
          ))}
      </List>
      {totalPage !== currentPage && (
        <Button
          type="button"
          onClick={() => setCurrentPage(prevState => prevState + 1)}
        >
          Load More
        </Button>
      )}
    </ListWrapper>
  );
};
