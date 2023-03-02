import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { createUseStyles } from "react-jss";

export function HomeButton() {
  const classes = useStyles();
  return (
    <div className={classes.homeBtn}>
      {<FontAwesomeIcon icon={faHouse} />}
      HOME
    </div>
  );
}

const useStyles = createUseStyles({
  homeBtn: {
    display: "flex",
    alignItems: "center",
    justifyContent: "right",
    gap: "0.6rem",
    position: "absolute",
    top: "2rem",
    fontSize: "1.5rem",
    left: "-1.8rem",
    padding: "0.6rem 1.25rem 0.6rem 2.2rem",
    borderRadius: "10000rem",
    transform: "translateY(-50%)",
    backgroundColor: "#3e3a44",
    textDecoration: "none",
    color: "white",
    border: "1px solid black",
    "&:hover": {
      color: "#3e3a44",
      background: "white",
      transition: "all 0.3s ease-in-out",
    },
  },
});
