import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App.jsx";
import "./index.css";
import { store, persistor } from "./redux/store.js"; // Убедитесь, что здесь правильный импорт
import { PersistGate } from "redux-persist/integration/react";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}> {/* Здесь должна быть переменная 'persistor', а не 'persistore' */}
        <App />
      </PersistGate>
    </Provider>
  </StrictMode>
);