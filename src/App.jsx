import MainView from "./views/MainView";
import SearchView from "./views/SearchView";
import ProfileView from "./views/ProfileView";
import { useState } from "react";

const App = () => {
  const [view, setView] = useState("main");
  const [selectedUser, setSelectedUser] = useState(null);

  const handleOnChangeView = (v, user) => {
    if (v === "profile") setSelectedUser(user);
    setView(v);
  };

  return (
    <>
      {view === "main" && <MainView onChangeView={handleOnChangeView} />}
      {view === "search" && <SearchView onChangeView={handleOnChangeView} />}
      {view === "profile" && (
        <ProfileView user={selectedUser} onChangeView={handleOnChangeView} />
      )}
    </>
  );
};

export default App;
