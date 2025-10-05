import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import UiProvider from "./services/context/UiProvider.tsx";
import { Provider } from "react-redux";
import { store } from "./services/store/store.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <UiProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </UiProvider>
  </StrictMode>
);
