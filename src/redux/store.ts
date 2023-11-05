// store.ts
import { createStore } from "redux";
import userReducer from "./userReducer";
// import { RootState } from "./types";

const store = createStore(userReducer);

export default store;
