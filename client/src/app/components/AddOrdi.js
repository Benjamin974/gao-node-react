import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Axios from 'axios';
import eventBus from '../views/eventBus';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';

function OpenDialog() {

    
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    const addOrdi = () => {
        let name = document.getElementById('nom').value;
        Axios.post(`ordinateurs/new`, {name: name}).then(({data}) => {
            eventBus.dispatch("addOrdi", { name: data });
        })
        setOpen(false);

    }
    return (

        <div>
            <IconButton variant="outlined" color="primary" onClick={handleClickOpen}>
            <Icon>computer_circle</Icon>
          </IconButton>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Ajouter un ordinateur"}</DialogTitle>
                <DialogContent>
                    <TextField
                        margin="dense"
                        label="Nom de l'ordinateur"
                        name='nom'
                        id='nom'
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary" >
                        Annuler
                    </Button>
                    <Button onClick={addOrdi} color="primary" autoFocus>
                        Valider
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}


class AddOrdi extends React.Component {

       

    render() {
        
        return (
            <div>
                <OpenDialog />
            </div>
        );
    }

}

export default AddOrdi;