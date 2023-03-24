import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./styles/main.scss";
import AuthContextProvider from "./store/auth-context";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <AuthContextProvider>
    <App />
  </AuthContextProvider>
);

// root.render(
//   <React.StrictMode>
//     <AuthContextProvider>
//       <App />
//     </AuthContextProvider>
//   </React.StrictMode>
// );
