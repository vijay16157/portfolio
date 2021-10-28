import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import SendIcon from '@material-ui/icons/Send';

import{ init } from 'emailjs-com';
init("user_C200MiaK2RP11pRcnDnRc");





const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
 
}));


export default function IconLabelButtons() {
  const classes = useStyles();
  
 

  return (
    <div >
      
      <Button type='submit'  
        variant="contained"
        color="primary"
        className={classes.button}
        endIcon={<SendIcon/>}
      >
        Send
      </Button>
      {/* <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          This is a success message!
        </Alert>
      </Snackbar>
         */}
    </div>
  );
}
