import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { configureStore } from '@reduxjs/toolkit';
import { isFollowingReducer } from './isFollowing/isFollowingSlice';
import { usersReducer } from './users/usersSlice';

const isFollowingPersistConfig = {
  key: 'isFollowing',
  storage,
  whitelist: ['isFollowing'],
};

export const store = configureStore({
  reducer: {
    isFollowing: persistReducer(isFollowingPersistConfig, isFollowingReducer),
    users: usersReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
