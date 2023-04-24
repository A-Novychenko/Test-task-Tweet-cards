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
import {
  selectError,
  selectFollowingsUsersList,
  selectVisibleUsers,
} from 'redux/selectors';
import { CardList } from 'components/CardList';
import { LoadMoreBtn } from 'components/LoadMoreBtn';
import { BackBtn } from 'components/BackBtn';

import { selectIsLoading } from 'redux/selectors';
import { Circles } from 'react-loader-spinner';

const Tweets = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentUsers, setCurrentUsers] = useState([]);
  const [userPerPage] = useState(3);

  const dispatch = useDispatch();
  const visibleUsers = useSelector(selectVisibleUsers);
  const IsFollowingList = useSelector(selectFollowingsUsersList);
  const lastIdx = currentPage * userPerPage;
  const totalPage = Math.ceil(visibleUsers.length / userPerPage);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

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
      {!error && (
        <CardList currentUsers={currentUsers} handleClickBtn={handleClickBtn} />
      )}
      {totalPage !== currentPage && !isLoading && !error && (
        <LoadMoreBtn nextPage={nextPage} />
      )}
      {isLoading && (
        <Circles
          height="300"
          width="300"
          color="#5cd3a8"
          ariaLabel="circles-loading"
          wrapperStyle={{
            display: 'flex',
            justifyContent: 'center',
            position: 'fixed',
            top: '150px',
            left: '50%',
            transform: 'translate(-50%)',
          }}
          visible={true}
        />
      )}
    </>
  );
};

export default Tweets;
