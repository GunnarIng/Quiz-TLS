import { Outlet } from "react-router";
import ErrorBoundary from "./Components/ErrorBoundary";
import { Header } from "./Components/Header";

export default function App() {
  return (
    <div className="App">
      <ErrorBoundary message="Something went wrong with the header. Try reload the page.">
        <Header />
      </ErrorBoundary>

      <ErrorBoundary message="Something went wrong with the current page. Try reload the page.">
        <main>
          <Outlet />
        </main>
      </ErrorBoundary>
    </div>
  );
}
