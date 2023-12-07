
import { receiveUsersActionCreator } from '../users/action'
import { receiveThreadsActionCreator } from '../threads/action'
import api from '../../utils/api'

function asyncPopulateUsersAndThreads() {
    return async (dispatch) => {
        try {
            const users = await api.getAllUsers();
            const threads = await api.allThreads()

            dispatch(receiveUsersActionCreator(users))
            dispatch(receiveThreadsActionCreator(threads))
        } catch (error) {
            alert(error.message);
        }
    }
}

export {asyncPopulateUsersAndThreads}