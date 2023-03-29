import { BrowserRouter } from "react-router-dom";

import { AppRoutes } from "./app.routes";
import { AuthyRoutes } from "./authy.routes";

export function Routes() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}