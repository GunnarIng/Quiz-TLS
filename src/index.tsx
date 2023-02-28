import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom";
import App from "./App";
import ErrorBoundary from "./ErrorBoundary";
import "./index.css";
import { HomePage } from "./pages/HomePage";
import { QuizPage } from "./pages/QuizPage";
import { Result } from "./pages/Result";

const router = createBrowserRouter(
  createRoutesFromElements(
    <ErrorBoundary>

    <Route path="/" element={<App />}>
      <Route index element={<HomePage />} />
      <Route path=":category" element={<QuizPage />} />
      <Route path="result" element={<Result />} />
    </Route>

    </ErrorBoundary>
  )
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  // <React.StrictMode>
    <RouterProvider router={router} />
  // </React.StrictMode>
);
