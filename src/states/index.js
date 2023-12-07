// berisi configStore
import { configureStore } from '@reduxjs/toolkit'
import usersReducer from './users/reducer'
import authUserReducer from './authUser/reducer'
import threadsReducer from './threads/reducer'
import threadDetailReducer from './threadDetail/reducer'
import isPreloadReducer from './isPreload/reducer'

const store = configureStore({
    reducer: {
        users: usersReducer,
        authUser: authUserReducer,
        threads: threadsReducer,
        threadDetail: threadDetailReducer,
        isPreload: isPreloadReducer,
    }
})

export default store