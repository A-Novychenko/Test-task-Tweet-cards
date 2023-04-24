import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  addFollowing,
  removeFollowing,
} from 'redux/isFollowing/isFollowingSlice';
import {
  changeQuantityFollower,
  fetchUsers,
} from 'redux/users/usersOperations';
import { Dropdown } from 'components/Dropdown';
import { CardList } from 'components/CardList';
import { LoadMoreBtn } from 'components/LoadMoreBtn';
import { BackBtn } from 'components/BackBtn';

import { Circles } from 'react-loader-spinner';
import { useUsers } from 'hooks';

const Tweets = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentUsers, setCurrentUsers] = useState([]);
  const [userPerPage] = useState(3);
  const dispatch = useDispatch();
  const { visibleUsers, followingsUsersList, isLoading, error } = useUsers();
  const lastIdx = currentPage * userPerPage;
  const totalPage = Math.ceil(visibleUsers.length / userPerPage);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  useEffect(() => {
    setCurrentUsers([...visibleUsers].slice(0, lastIdx));
  }, [lastIdx, visibleUsers]);

  const handleClickBtn = ({ id, followers }) => {
    const inFollowers = followingsUsersList.includes(id);

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
