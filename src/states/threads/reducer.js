import { ActionType } from "./action";

function threadsReducer(threads = [], action = {}) {
    switch (action.type) {
        case ActionType.RECEIVE_THREADS:
            console.log('ACTION RECEIVE:', threads)
            return action.payload.threads;
        case ActionType.ADD_THREAD:
            return [action.payload.thread, ...threads]
        case ActionType.LIKE_THREAD:
            return threads.map((thread) => {
                if (thread.id === action.payload.threadId) {
                    return {
                        ...thread,
                        upVotesBy: thread.upVotesBy.includes(action.payload.id) 
                        ? thread.upVotesBy.filter((id) => id !== action.payload.userId)
                        : thread.upVotesBy.concat([action.payload.userId])
                    }
                }
                return thread
            })
        default:
            return threads
    }
}

export default threadsReducer