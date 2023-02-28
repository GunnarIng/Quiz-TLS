import { useState } from "react";
import { createUseStyles } from "react-jss";
import { DarkMode } from "./DarkMode";

export function Header() {
  const classes = useStyles();
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    setMode(mode === "light" ? "dark" : "light");
  };

  return (
    <>
      <div
        className={
          mode === "light"
            ? classes.headerContainer
            : classes.headerContainerDark
        }
      >
        <h1>The Quizie-Quiz Game</h1>
        <div className={classes.darkMode}>
          <DarkMode mode={mode} toggleMode={toggleMode} />
        </div>
      </div>
    </>
  );
}

const useStyles = createUseStyles({
  headerContainer: {
    color: "black",
    background: "whitesmoke",
    borderBottom: "6px solid gray",
    height: "85px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "2px solid green",

    "& h1": {
      textAlign: "center",
      fontSize: "1.5rem",
      padding: "1rem 0",
      "@media (min-width: 768px)": {
        fontSize: "2rem",
      },
      "@media (min-width: 1024px)": {
        fontSize: "3rem",
      },
    },
  },
  headerContainerDark: {
    color: "white",
    background: "black",
    borderBottom: "6px solid gray",
    height: "85px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "2px solid green",

    "& h1": {
      textAlign: "center",
      fontSize: "1.5rem",
      padding: "1rem 0",
      "@media (min-width: 768px)": {
        fontSize: "2rem",
      },
      "@media (min-width: 1024px)": {
        fontSize: "3rem",
      },
    },
  },
  darkMode: {
    marginRight: "1rem",
  },
});
