import { createContext, useContext } from "react";

const initialState = {
  view: "main",
  selectedUser: null,
  handleOnChangeView: () => null,
};

export const ViewsContext = createContext(initialState);

export const useViews = () => {
  const ctx = useContext(ViewsContext);
  if (ctx === undefined)
    throw new Error("useViews doit être utilisé au sein d'un ViewsProvider");
  return ctx;
};
