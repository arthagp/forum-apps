import api from "../../utils/api";

const ActionType = {
    RECEIVE_THREADS: 'RECEIVE_THREADS',
    ADD_THREAD: 'ADD_THREAD',
    LIKE_THREAD: 'LIKE_THREAD',
    UNLIKE_THREAD: 'UNLIKE_THREAD'
}

function receiveThreadsActionCreator(threads){
    return{
        type: ActionType.RECEIVE_THREADS,
        payload: {
            threads,
        },
    };
}

function addThreadActionCreator(thread){
    return{
        type: ActionType.ADD_THREAD,
        payload: {
            thread
        }
    }
}

function toggleLikeActionCreator({userId, threadId}){
    return{
        type: ActionType.LIKE_THREAD,
        payload: {
            userId,
            threadId
        }
    }
}

export {
    ActionType,
    receiveThreadsActionCreator
}