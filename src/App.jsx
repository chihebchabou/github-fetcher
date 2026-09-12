import MainView from "./views/MainView";
import SearchView from "./views/SearchView";
import ProfileView from "./views/ProfileView";
import { useState } from "react";

const App = () => {
  const [view, setView] = useState("main");

  const handleOnChangeView = (v) => setView(v);

  return (
    <>
      {view === "main" && <MainView onChangeView={handleOnChangeView} />}
      {view === "search" && <SearchView onChangeView={handleOnChangeView} />}
      {view === "profile" && <ProfileView />}
    </>
  );
};

export default App;
