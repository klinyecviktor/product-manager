import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { AppBar } from '../';
import RaisedButton from 'material-ui/RaisedButton';
import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

export default class App extends React.Component {
    render() {
        const bar = (AppBar) ? '<AppBar/>' : 'No AppBar';
        console.log(bar);

        return (
            <div>
                <MuiThemeProvider>
                    <AppBar/>
                </MuiThemeProvider>
                <MuiThemeProvider>
                    <RaisedButton label="Default" />
                </MuiThemeProvider>
            </div>
        );
    }
}