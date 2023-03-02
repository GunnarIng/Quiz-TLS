import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import ErrorBoundary from "./Components/ErrorBoundary";
import "./index.css";
import { HomePage } from "./pages/HomePage";
import { QuizPage } from "./pages/QuizPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<HomePage />} />
      <Route path=":category" element={<QuizPage />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <ErrorBoundary message={"Something went wrong. Try reload the page."}>
      <RouterProvider router={router} />
    </ErrorBoundary>
  </StrictMode>
);
