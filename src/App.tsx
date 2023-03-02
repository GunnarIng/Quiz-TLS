import { Outlet } from "react-router";
import ErrorBoundary from "./Components/ErrorBoundary";
import { Header } from "./Components/Header";

export default function App() {
  return (
    <ErrorBoundary message="Something went wrong. Try reload the page.">
      <div className="App">
        <Header />
        <main>
          <Outlet />
        </main>
      </div>
    </ErrorBoundary>
  );
}
