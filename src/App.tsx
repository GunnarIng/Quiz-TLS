import { createUseStyles } from "react-jss";
import { Outlet } from "react-router";
import { Header } from "./Components/Header";
import ErrorBoundary from "./ErrorBoundary";

export default function App() {
  const classes = useStyles();

  return (
    <ErrorBoundary message="button">
      <div className="App">
        <Header />
        <main>
          <Outlet />
        </main>
      </div>
    </ErrorBoundary>
  );
}

const useStyles = createUseStyles({});

// 1. Startsidan visar alla katogorier
// 2. Vald katogori tar en till QuizBoard och tar och visar komponent som till vald kat.
// 3.

// const useStyles = createUseStyles({
//   myH1: {
//     color: 'green',
//     margin: "5rem 3rem 0 0",
//     border: "1px solid red",

//     '& span': {
//       color: "pink",
//     },
//   },

//   myH2: {
//     color: "orange",
//     boxShadow:"0px 10px 8px black",
//     border: "1px solid black",

//     "&:hover": {
//       color: "blue",
//     }
//   },

// });
