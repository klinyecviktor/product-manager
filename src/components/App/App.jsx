import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { AppBar } from '../';
import RaisedButton from 'material-ui/RaisedButton';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';

function handleTouchTap() {
    alert('onTouchTap triggered on the title component');
}


export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {open: false};
    }

    handleToggle = () => {
        console.log('handleToggle');
        this.setState({open: !this.state.open});
    }

    render() {
        const bar = (AppBar) ? '<AppBar/>' : 'No AppBar';
        console.log(bar);

        return (
            <div>
                <MuiThemeProvider>
                    <div>
                        <AppBar iconElementLeft={ <IconButton iconClassName="muidocs-icon-custom-github" tooltip="GitHub"/>  }
                                onLeftIconButtonTouchTap={ handleTouchTap }
                                onTitleTouchTap={handleTouchTap}/>
                        <RaisedButton
                            label="Toggle Drawer"
                            onTouchTap={this.handleToggle}
                        />
                        <Drawer open={this.state.open}>
                            <MenuItem>Menu Item</MenuItem>
                            <MenuItem>Menu Item 2</MenuItem>
                        </Drawer>
                    </div>
                </MuiThemeProvider>
            </div>
        );
    }
}