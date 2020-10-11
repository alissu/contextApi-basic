import { Switch, withStyles } from '@material-ui/core';
import { green } from '@material-ui/core/colors';

const GreenSwitch = withStyles({ //TODO: melhorar 
  switchBase: {
    color: green[300],
    '&$checked': {
      color: green[500],
    },
    '&$checked + $track': {
      backgroundColor: green[500],
    },
  },
  checked: {},
  track: {},
})(Switch);

export default GreenSwitch;