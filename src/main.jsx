import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";
import { BrowserRouter } from "react-router-dom";
import ProtectPage from "./components/providers/ProtectPage/ProtectPage.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ProtectPage>
        <App />
      </ProtectPage>
    </BrowserRouter>
  </React.StrictMode>
);
