import { Outlet } from "react-router";
import { Header } from "./Components/Header";

export default function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
