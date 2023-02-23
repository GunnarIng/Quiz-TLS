import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import "./index.css";
import { HomePage } from "./pages/HomePage";
import { QAnimals } from "./pages/QAnimals";
import { QFilm } from "./pages/QFilm";
import { QGeneralKnowledge } from "./pages/QGeneralKnowledge";
import { QMusik } from "./pages/QMusic";
import { QScience } from "./pages/QScience";
import { QSport } from "./pages/QSport";
import { QVehicles } from "./pages/QVehicles";
import { Result } from "./pages/Result";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<HomePage />} />
      <Route path="film" element={<QFilm />} />
      <Route path="music" element={<QMusik />} />
      <Route path="animals" element={<QAnimals />} />
      <Route path="science" element={<QScience />} />
      <Route path="general-knowledge" element={<QGeneralKnowledge />} />
      <Route path="sport" element={<QSport />} />
      <Route path="vehicles" element={<QVehicles />} />
      <Route path="result" element={<Result />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
