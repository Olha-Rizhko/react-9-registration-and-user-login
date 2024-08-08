import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import tasksReducer from "./tasks/slice";
import authReducer from "./auth/slice";

const persistedAuthReducer = persistReducer(
  {
    key: "auth-token",
    storage,
    whitelist: ["token"],
  },
  authReducer
);

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    auth: persistedAuthReducer,
  },
});

export const persistor = persistStore(store);
