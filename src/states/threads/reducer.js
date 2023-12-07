import { ActionType } from "./action";

function threadsReducer(threads = [], action = {}) {
    switch (action.type) {
        case ActionType.RECEIVE_THREADS:
            return action.payload.threads;
        case ActionType.ADD_THREAD:
            return [action.payload.thread, ...threads]
        // case ActionType.ADD_COMMENT:
        //     return 
        //     // console.log('Reducer - Threads Before Update:', threads);
        //     // console.log('Reducer - ADD_COMMENT action:', action);
        //     // const updatedThreads = threads.map(thread => {
        //     //     if (thread.id === action.payload.comment.threadId) {
        //     //         return {
        //     //             ...thread,
        //     //             comments: [...thread.comments, action.payload.comment]
        //     //         };
        //     //     }
        //     //     return thread;
        //     // });
        //     // console.log('Reducer - Updated Threads:', updatedThreads);
        //     // return updatedThreads.length > 0 ? updatedThreads : threads;

        default:
            return threads
    }
}

export default threadsReducer