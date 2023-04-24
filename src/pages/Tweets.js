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
import { Dropdown } from 'components/Dropdown';
import { selectFollowingsUsersList, selectVisibleUsers } from 'redux/selectors';
import { CardList } from 'components/CardList';
import { LoadMoreBtn } from 'components/LoadMoreBtn';
import { BackBtn } from 'components/BackBtn';

const Tweets = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentUsers, setCurrentUsers] = useState([]);
  const [userPerPage] = useState(3);

  const dispatch = useDispatch();
  const visibleUsers = useSelector(selectVisibleUsers);
  const IsFollowingList = useSelector(selectFollowingsUsersList);
  const lastIdx = currentPage * userPerPage;
  const totalPage = Math.ceil(visibleUsers.length / userPerPage);

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

  const nextPage = () => {
    setCurrentPage(prevState => prevState + 1);
  };
  const resetCurrentPage = () => {
    setCurrentPage(1);
  };

  return (
    <>
      <BackBtn />
      <Dropdown resetCurrentPage={resetCurrentPage} />
      <CardList currentUsers={currentUsers} handleClickBtn={handleClickBtn} />
      {totalPage !== currentPage && <LoadMoreBtn nextPage={nextPage} />}
    </>
  );
};

export default Tweets;
