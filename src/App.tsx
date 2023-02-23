import { createUseStyles } from "react-jss";
import { Header } from "./Components/Header";

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <Header />
      <h1>
        helli <span>sluta</span>
      </h1>
      <h1>kopeter</h1>
    </div>
  );
}

export default App;

const useStyles = createUseStyles({});

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
