import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Icon from '@material-ui/core/Icon';
import Axios from 'axios';
import {  Row } from 'reactstrap';
function OpenDialog(props) {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const deleteAttr = () => {
        Axios.delete('http://localhost:8008/api/attr/' + props.attribution.id).then(response => {
            props.onSelectAttribution(props.horaire)
        })
        setOpen(false);
    }

    return (
        <Row>
            <IconButton variant="outlined" color="secondary" onClick={handleClickOpen}>
                <Icon>delete_circle</Icon>
            </IconButton>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Ajouter une attribution"}</DialogTitle>
                <DialogContent>
                    Voulez vous supprimer l'attribution ?
                </DialogContent>
                <DialogActions>
                    <IconButton  onClick={handleClose} color="primary" >
                        <Icon>highlight_off_circle</Icon>
                    </IconButton>
                    <IconButton onClick={deleteAttr} variant="outlined" color="secondary">
                        <Icon>delete_circle</Icon>
                    </IconButton>
                </DialogActions>
            </Dialog>
        </Row>
    );
}

class AddAttribution extends React.Component {

    render() {

        return (
            <div>
                <OpenDialog onSelectAttribution={this.props.onSelectAttribution} ordinateur={this.props.ordinateur} horaire={this.props.horaire} attribution={this.props.attribution} />
            </div>
        );
    }

}




export default AddAttribution;