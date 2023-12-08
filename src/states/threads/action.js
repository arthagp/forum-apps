import api from "../../utils/api";

const ActionType = {
    RECEIVE_THREADS: 'RECEIVE_THREADS',
    ADD_THREAD: 'ADD_THREAD',
    LIKE_THREAD: 'LIKE_THREAD',
    UNLIKE_THREAD: 'UNLIKE_THREAD',
    FILTER_CATEGORY: 'FILTER_CATEGORY'
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

function toggleFilterCategoryActionCreator(category) {
    return {
        type: ActionType.FILTER_CATEGORY,
        payload: {
            category
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

function toggleUnLikeActionCreator({ userId, threadId }) {
    return {
        type: ActionType.UNLIKE_THREAD,
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
function asyncLikeThread(threadId) {
    return async (dispatch) => {
        try {
            const upVote = await api.upVoteThread(threadId)

            dispatch(toggleLikeActionCreator(upVote))
        } catch (error) {
            console.log(error)
            alert(error.message)
        }
    }
}

function asyncUnLikeThread(threadId) {
    return async (dispatch) => {
        try {
            const downVote = await api.downVoteThread(threadId)

            dispatch(toggleUnLikeActionCreator(downVote))
        } catch (error) {
            alert(error.message)
        }
    }
}

export {
    ActionType,
    receiveThreadsActionCreator,
    asyncCreateThread,
    asyncLikeThread,
    asyncUnLikeThread
}