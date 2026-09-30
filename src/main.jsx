import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ViewsProvider } from "./context/views/ViewsProvider.jsx";
import { UsersProvider } from "./context/users/UsersProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ViewsProvider>
      <UsersProvider>
        <App />
      </UsersProvider>
    </ViewsProvider>
  </StrictMode>,
);
