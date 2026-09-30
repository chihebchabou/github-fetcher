import MainView from "./views/MainView";
import SearchView from "./views/SearchView";
import ProfileView from "./views/ProfileView";
import { useViews } from "./context/views/ViewsContext";

const App = () => {
  const { view } = useViews();

  return (
    <>
      {view === "main" && <MainView />}
      {view === "search" && <SearchView />}
      {view === "profile" && <ProfileView />}
    </>
  );
};

export default App;
