import { CardItem } from 'components/CardItem/CardItem';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addFollowing,
  removeFollowing,
} from 'redux/isFollowing/isFollowingSlice';

import {
  changeQuantityFollower,
  fetchUsers,
} from 'redux/users/usersOperations';

import { List, ListWrapper, Button } from './CardList.styled';
import { Link } from 'react-router-dom';
import { Dropdown } from 'components/Dropdown';
import { selectFollowingsUsersList, selectVisibleUsers } from 'redux/selectors';

export const CardList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentUsers, setCurrentUsers] = useState([]);
  const [userPerPage] = useState(3);

  const dispatch = useDispatch();
  const visibleUsers = useSelector(selectVisibleUsers);
  const IsFollowingList = useSelector(selectFollowingsUsersList);
  const lastIdx = currentPage * userPerPage;
  const totalPage = visibleUsers.length / userPerPage;

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  useEffect(() => {
    setCurrentUsers([...visibleUsers].slice(0, lastIdx));
  }, [lastIdx, visibleUsers]);

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
      <Dropdown />
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
