import { createUseStyles } from "react-jss";

type DarkModeProps = {
  mode: string;
  toggleMode: () => void;
};

export function DarkMode({ mode, toggleMode }: DarkModeProps) {
  const classes = useStyles();

  return (
    <button
      className={mode === "light" ? classes.lightMode : classes.darkMode}
      onClick={toggleMode}
    >
      {mode === "light" ? "Dark Mode" : "Light Mode"}
    </button>
  );
}

const useStyles = createUseStyles({
  lightMode: {
    background: "none",
    border: "none",
    fontSize: "1rem",
    color: "black",
    cursor: "pointer",
    textDecoration: "underline",
    "&:hover": {
      fontWeight: "bold",
    },
  },
  darkMode: {
    background: "none",
    border: "none",
    fontSize: "1rem",
    color: "white",
    cursor: "pointer",
    textDecoration: "underline",
    "&:hover": {
      fontWeight: "bold",
    },
  },
});
