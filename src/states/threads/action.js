import api from "../../utils/api";

const ActionType = {
    RECEIVE_THREADS: 'RECEIVE_THREADS',
    ADD_THREAD: 'ADD_THREAD',
    LIKE_THREAD: 'LIKE_THREAD',
    UNLIKE_THREAD: 'UNLIKE_THREAD',
}

function receiveThreadsActionCreator(threads) {
    return {
        type: ActionType.RECEIVE_THREADS,
        payload: {
            threads,
        },
    };
}

function addThreadActionCreator(thread) {
    return {
        type: ActionType.ADD_THREAD,
        payload: {
            thread
        }
    }
}

function toggleLikeActionCreator({ userId, threadId }) {
    return {
        type: ActionType.LIKE_THREAD,
        payload: {
            userId,
            threadId
        }
    }
}

function asyncCreateThread({ title, body, category }) {
    return async (dispatch) => {
        try {
            const thread = await api.createThread({ title, body, category });
            dispatch(addThreadActionCreator(thread))
        } catch (error) {
            alert(error.message)
        }
    }
}

export {
    ActionType,
    receiveThreadsActionCreator,
    asyncCreateThread,
}