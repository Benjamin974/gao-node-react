import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';

function MaterialUIPickers(props) {
    // The first commit of Material-UI
    const [selectedDate, setSelectedDate] = React.useState(new Date().toISOString().substr(0, 10),);

    const handleDateChange = (date) => {
        setSelectedDate(date);
        props.onSelectDate(date); 
    };

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid container>
                <KeyboardDatePicker
                    
                    disableToolbar
                    variant="inline"
                    format="yyyy-MM-dd"
                    margin="normal"
                    id="date-picker-inline"
                    label="Date picker inline"
                    minDate={new Date().toISOString().substr(0, 10)}
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                        'aria-label': 'change date',
                    }}
                />
            </Grid>
        </MuiPickersUtilsProvider>
    );
}
class DatePicker extends React.Component {
    render() {
        return (
            <div>
                <MaterialUIPickers onSelectDate={this.props.onSelectDate}/>
            </div>
        )

    }
}

export default DatePicker;