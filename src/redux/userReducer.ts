// userReducer.ts
import { SET_USER } from "./userActions";
import { SetUserAction } from "./userActions";

export interface UserState {
  user: unknown;
}

export type UserAction = SetUserAction;

const initialState: UserState = {
  user: null,
};

const userReducer = (
  state: UserState = initialState,
  action: UserAction
): UserState => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
