import { getUsers } from '../api';

const GET_USERS = 'GET_USERS';
const IS_LAST_PAGE = 'IS_LAST_PAGE';

const initialState = {
  users: [],
  isLastPage: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        users: [...state.users, ...action.payload],
      };

    case IS_LAST_PAGE:
      return {
        ...state,
        isLastPage: action.payload,
      };

    default:
      return state;
  }
};

const setUsers = payload => ({
  type: GET_USERS,
  payload,
});

const setIsLastPage = payload => ({
  type: IS_LAST_PAGE,
  payload,
});

export const getUsersThunk = page => async(dispatch) => {
  const data = await getUsers(page);

  if (data.success) {
    dispatch(setUsers(data.users));
  } else {
    alert(data.message);
  }

  if (!data.links.next_url) {
    dispatch(setIsLastPage(true));
  }
};
