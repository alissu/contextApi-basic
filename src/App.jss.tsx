import { createStyles, makeStyles, Theme } from "@material-ui/core";
import { green } from "@material-ui/core/colors";

const style = makeStyles((theme: Theme) => createStyles({
  mainContainer: {
    width: '98.5vw',
    height: '97.5vh',
    padding: 0,
    margin: 0,
    outline: '1px solid blue'
  },
  switchBase: {
    color: green[300],
    '&$checked': {
      color: green[500],
    },
    '&$checked + $track': {
      backgroundColor: green[500],
    },
  }
}));

export default style;