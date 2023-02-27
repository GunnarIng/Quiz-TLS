import { createUseStyles } from "react-jss";
import video from "../assets/water.mp4";
import { Categories } from "../Components/Categories";

export function HomePage() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.rootStyle}>
        <video src={video} className={classes.videoStyle} autoPlay muted loop></video>
        <h2 className={classes.h2Style}>Choose Category</h2>
        <Categories />
      </div>
    </>
  );
}

const useStyles = createUseStyles({
  rootStyle: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "relative",
    height: "calc(100vh - 85px)",
    overflow: "hidden",
  },
  h2Style: {
    fontSize: "1.4rem",
    padding: "6% 0 12%",
    width: "100%",
    textAlign: "center",
    "@media (min-width: 768px)": {
      fontSize: "2rem",
      padding: "2% 0 4%",
    },
    "@media (min-width: 1024px)": {
      fontSize: "2.5rem",
    },
  },
  videoStyle: {
    position: "absolute",
    objectFit: "cover",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: "-1",
    opacity: "0.6",
  },
});
