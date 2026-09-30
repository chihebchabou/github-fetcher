import { useState } from "react";
import { ViewsContext } from "./ViewsContext";

export const ViewsProvider = ({ children }) => {
  const [view, setView] = useState("main");
  const [selectedUser, setSelectedUser] = useState(null);

  const handleOnChangeView = (v, user) => {
    if (v === "profile") setSelectedUser(user);
    setView(v);
  };

  return (
    <ViewsContext.Provider value={{ view, selectedUser, handleOnChangeView }}>
      {children}
    </ViewsContext.Provider>
  );
};
