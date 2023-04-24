import { createSelector } from '@reduxjs/toolkit';

export const selectUsers = state => state.users.items;
export const selectFollowingsUsersList = state => state.isFollowing;
export const selectStatusFilter = state => state.statusFilter;
export const selectError = state => state.users.error;
export const selectIsLoading = state => state.users.isLoading;

export const selectVisibleUsers = createSelector(
  [selectUsers, selectFollowingsUsersList, selectStatusFilter],
  (usersData, followingsList, statusFilter) => {
    console.log('usersData', usersData);
    const hendleUsers = usersData.map(user => {
      const isFollowing = followingsList.some(el => el === user.id);
      if (isFollowing) {
        return { ...user, isFollowing: true };
      }
      return { ...user, isFollowing: false };
    });

    switch (statusFilter) {
      case 'follow':
        return hendleUsers.filter(user => !user.isFollowing);
      case 'followings':
        return hendleUsers.filter(user => user.isFollowing);
      default:
        return hendleUsers;
    }
  }
);
