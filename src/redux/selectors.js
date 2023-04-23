import { createSelector } from '@reduxjs/toolkit';

export const selectUsers = state => state.users;
export const selectFollowingsUsersList = state => state.isFollowing;
export const selectStatusFilter = state => state.statusFilter;

export const selectVisibleUsers = createSelector(
  [selectUsers, selectFollowingsUsersList, selectStatusFilter],
  (usersData, followingsList, statusFilter) => {
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
