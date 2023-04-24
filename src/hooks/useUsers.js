import { useSelector } from 'react-redux';
import {
  selectUsers,
  selectFollowingsUsersList,
  selectStatusFilter,
  selectError,
  selectIsLoading,
  selectVisibleUsers,
} from 'redux/selectors';

export const useUsers = () => {
  const users = useSelector(selectUsers);
  const followingsUsersList = useSelector(selectFollowingsUsersList);
  const statusFilter = useSelector(selectStatusFilter);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const visibleUsers = useSelector(selectVisibleUsers);

  return {
    users,
    followingsUsersList,
    statusFilter,
    isLoading,
    error,
    visibleUsers,
  };
};
