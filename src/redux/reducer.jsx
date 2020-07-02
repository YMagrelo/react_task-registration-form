import { getUsers } from '../api';

const GET_USERS = 'GET_USERS';

const initialState = {
  users: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        users: [...state.users, ...action.payload],
      };

    default:
      return state;
  }
};

const setUsers = payload => ({
  type: GET_USERS,
  payload,
});

export const getUsersThunk = page => async(dispatch) => {
  const data = await getUsers(page);

  if (data.success) {
    dispatch(setUsers(data.users));
  } else {
    alert(data.message);
  }
};
