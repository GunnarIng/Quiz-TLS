import { faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { createUseStyles } from "react-jss";

type DarkModeProps = {
  mode: string;
  toggleMode: () => void;
};

export function DarkMode({ mode, toggleMode }: DarkModeProps) {
  const classes = useStyles();

  const handleModeChange = () => {
    const body = document.getElementsByTagName("body")[0];
    if (mode === "light") {
      body.classList.remove("light-mode");
      body.classList.add("dark-mode");
    } else {
      body.classList.remove("dark-mode");
      body.classList.add("light-mode");
    }
    toggleMode();
  };

  return (
    <button
      className={`${mode === "light" ? classes.lightMode : classes.darkMode} ${
        classes.button
      }`}
      onClick={handleModeChange}
    >
      {mode === "light" ? (
        <>
          <FontAwesomeIcon icon={faLightbulb} />
          <span>Light</span>
        </>
      ) : (
        <>
          <FontAwesomeIcon icon={faLightbulb} />
          <span>Dark</span>
        </>
      )}
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
  button: {
    border: "2px solid grey",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
});
