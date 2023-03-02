import { Outlet } from "react-router";
import { Header } from "./Components/Header";
import ErrorBoundary from "./ErrorBoundary";

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
