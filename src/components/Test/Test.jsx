import React from 'react';
import { Page, Toolbar, ToolbarButton, Icon, Button } from 'react-onsenui';
import ons from 'onsenui';
import onsenui from 'onsenui/css/onsenui.css'
import onsenuicomponents from 'onsenui/css/onsen-css-components.css'

export default class Test extends React.Component {
    constructor(props) {
        super(props);
    }

    handleClick() {
        ons.notification.alert('Hello world!');
    }

    renderToolbar() {
        return (
            <Toolbar>
                <div className='center'>My app</div>
                <div className='right'>
                    <ToolbarButton>
                        <Icon icon='ion-navicon, material:md-menu'></Icon>
                    </ToolbarButton>
                </div>
            </Toolbar>
        );
    }

    render() {
        return (
            <Page renderToolbar={this.renderToolbar}>
                <p style={{textAlign: 'center'}}>
                    <Button onClick={this.handleClick}>
                        Not Found
                    </Button>
                </p>
            </Page>
        );
    }
}