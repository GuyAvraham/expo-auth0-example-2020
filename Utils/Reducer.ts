export const initialUserState = {
  name: null,
  primaryUserId: null,
  passwordless: null
};

export const initialState = {
  user: initialUserState,
  drawerNav: {},
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "setUser":
      return {
        ...state,
        user: action.newUser
      };
    case "resetUser":
      return {
        ...state,
        user: initialUserState
      };
    case "setDrawerNav":
      return {
        ...state,
        drawerNav: action.drawerNav,
      };
    default:
      return state;
  }
};
