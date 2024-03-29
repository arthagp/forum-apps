import { configureStore } from '@reduxjs/toolkit';
import { loadingBarReducer } from 'react-redux-loading-bar';
import usersReducer from './users/reducer';
import authUserReducer from './authUser/reducer';
import threadsReducer from './threads/reducer';
import threadDetailReducer from './threadDetail/reducer';
import isPreloadReducer from './isPreload/reducer';
import leaderBoardsReducer from './leaderBoards/reducer';

const store = configureStore({
  reducer: {
    users: usersReducer,
    authUser: authUserReducer,
    threads: threadsReducer,
    threadDetail: threadDetailReducer,
    isPreload: isPreloadReducer,
    loadingBar: loadingBarReducer,
    leaderBoards: leaderBoardsReducer,
  },
});

export default store;
