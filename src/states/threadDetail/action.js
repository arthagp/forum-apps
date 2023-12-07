//@TODO : membuat action untuk menampilkan threadDetail berdasarkan threadId, dan membuat async untuk mendapatkan data dari server

import api from "../../utils/api"

const ActionType = {
    RECEIVE_THREAD_DETAIL: 'RECEIVE_THREAD_DETAIL',
    CLEAR_THREAD_DETAIL: 'CLEAR_THREAD_DETAIL',
    ADD_COMMENT: 'ADD_COMMENT'
}

function receiveThreadDetailActionCreator(threadDetail) {
    return {
        type: ActionType.RECEIVE_THREAD_DETAIL,
        payload: {
            threadDetail
        }
    }
}

function clearThreadDetailActionCreator() {
    return {
        type: ActionType.CLEAR_THREAD_DETAIL,
    };
}

function addCommentActionCreator(comment) {
    return {
        type: ActionType.ADD_COMMENT,
        payload: {
            comment
        }
    }
}


function asyncCreateComment({ threadId, content }) {
    return async (dispatch) => {
        try {
            const comment = await api.createComment({ threadId, content })
            console.log(comment, 'comment')
            dispatch(addCommentActionCreator(comment))
        } catch (error) {
            alert(error.message)
        }
    }
}

function asyncReceiveThreadDetail(threadId) {
    return async (dispatch) => {
        dispatch(clearThreadDetailActionCreator())
        try {
            const threadDetail = await api.threadDetail(threadId)
            dispatch(receiveThreadDetailActionCreator(threadDetail))
        } catch (error) {
            alert(error.message)
        }
    }
}

export {
    ActionType,
    asyncReceiveThreadDetail,
    clearThreadDetailActionCreator,
    asyncCreateComment
}