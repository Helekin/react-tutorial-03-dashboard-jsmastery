import React from "react";
import ReactDOM from "react-dom/client";
import { registerLicense } from "@syncfusion/ej2-base";

import "./index.css";

import App from "./App";

registerLicense(
  "ORg4AjUWIQA/Gnt2VVhhQlFaclhJXGFWfVJpTGpQdk5xdV9DaVZUTWY/P1ZhSXxRdkNiUH5cc3RUQ2ReVkE="
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
