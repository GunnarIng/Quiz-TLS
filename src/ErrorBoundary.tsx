import { Component, ReactNode } from "react";
import { NavLink } from "react-router-dom";

interface Props {
  children: ReactNode;
  message: string;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError && this.props.message == "button") {
      return (
        <NavLink to="/">
          <button
            style={{
              background: "red",
              display: "flex",
              margin: "200px auto",
              padding: "10px 30px",
              fontSize: "1.5rem",
              borderRadius: "1rem",
            }}
          >
            Reload Page
          </button>
        </NavLink>
      );
    }
    if (this.state.hasError) {
      return <h2>{this.props.message}</h2>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
