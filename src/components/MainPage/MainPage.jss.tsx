import { createStyles, makeStyles, Theme } from "@material-ui/core";

const style = makeStyles((theme: Theme) => createStyles({
  mainContainer: {
    width: '98.5vw',
    height: '97.5vh',
    padding: 0,
    margin: 0,
    outline: '1px solid blue'
  },
  mainContainerDark: {
    width: '98.5vw',
    height: '97.5vh',
    padding: 0,
    margin: 0,
    outline: '1px solid red',
    backgroundColor: '#333'
  }
}));

export default style;