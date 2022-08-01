import * as React from 'react';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { DOMAIN } from '../../../index';
import { useParams } from 'react-router-dom';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};



export default function MeetCard(){ 
  const { code } = useParams();  
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    console.log("TWINKLE N00B");
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

    useEffect(() => {
        handleClickOpen(); 
    },[]);

    const copyCode = () => {
        var coppied_code = document.getElementsByClassName('MeetCode')
        console.log(coppied_code.MeetCode.value);
    }



  return (
    <div>
     <link href='https://fonts.googleapis.com/css?family=Roboto Mono' rel='stylesheet' /> 
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          Invite People
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            Meet Code : 
          </Typography>
          <Typography gutterBottom style={{fontFamily:'Roboto Mono', fontSize:'22px'}}>
            { DOMAIN }/{ code }
            <input style={{display:'none'}} className='MeetCode' name='MeetCode' value ={`${DOMAIN}/${code}`}/>
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} onClick={copyCode}>
            Copy Code
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
