import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { FaWhatsapp } from "react-icons/fa";
import { Provider } from "react-redux";
import store from "./components/Redux/store";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="relative">
      <Provider store={store}>
        <App />
      </Provider>
      <div className="  fixed top-[75%] right-[3%] pointer">
        <div>
          <FaWhatsapp className="text-4xl text-green-500" />
        </div>
      </div>
    </div>
  </React.StrictMode>
);

reportWebVitals();
