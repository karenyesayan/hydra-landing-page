import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Loading from "./components/Loading";
import reportWebVitals from "./reportWebVitals";

const App = React.lazy(() => import("./App"));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Suspense fallback={<Loading />}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Suspense>
);

reportWebVitals();
