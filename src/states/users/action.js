import api from '../../utils/api'

const ActionType = {
    RECEIVE_USERS: 'RECEIVE_USERS',
};

function receiveUsersActionCreator(users){
    return {
        type: ActionType.RECEIVE_USERS,
        payload: {
            users
        },
    };
}

function asyncRegisterUser({name, email, password}){
    return async () => {
        try {
            await api.register({name, email, password})
            console.log('berhasill')
            alert('Berhasil Register')
        } catch (error) {
            console.log(error.message)
            alert(error.message)
        }
    }
}

export {
    ActionType,
    receiveUsersActionCreator,
    asyncRegisterUser,
}