import { createContext, useContext } from "react";

const initialState = {
  query: "",
  users: [],
  loading: false,
  error: "",
  handleOnChange: () => null,
  handleClearUsers: () => null,
};

export const UsersContext = createContext(initialState);

export const useUsers = () => {
  const ctx = useContext(UsersContext);
  if (ctx === undefined)
    throw new Error("useUsers doit être utilisé au sein d'un UsersProvider");
  return ctx;
};
