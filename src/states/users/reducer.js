import { ActionType } from './action';

function usersReducer(users = [], action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_USERS:
      console.log(action.payload.users);
      return action.payload.users;
    default:
      return users;
  }
}

export default usersReducer;
