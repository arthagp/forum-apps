import { ActionType } from "./action";

function threadDetailReducer(threadDetail = null, action = {}) {
    switch (action.type) {
        case ActionType.RECEIVE_THREAD_DETAIL:
            return action.payload.threadDetail;
        case ActionType.CLEAR_THREAD_DETAIL:
            return null;
        case ActionType.ADD_COMMENT:
            console.log('Reducer - ThreadDetail Before Update:', threadDetail);

            // Jika threadDetail masih null, buat objek thread baru dengan komentar
            if (!threadDetail) {
                return {
                    ...action.payload.comment,
                    comments: [action.payload.comment]
                };
            }

            // Jika threadDetail sudah ada, tambahkan komentar ke array comments
            const updatedThreadDetail = {
                ...threadDetail,
                comments: [action.payload.comment, ...(threadDetail.comments || [])]
            };

            console.log('Reducer - ThreadDetail After Update:', updatedThreadDetail);
            return updatedThreadDetail;
        default:
            return threadDetail
    }
}

export default threadDetailReducer