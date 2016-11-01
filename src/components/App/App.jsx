import React from 'react';
import { Page, List, ListItem, Toolbar, ToolbarButton, Icon, Button, Splitter, SplitterContent, SplitterSide } from 'react-onsenui';
import ons from 'onsenui';
// import { ipcRenderer } from 'electron';
import onsenui from 'onsenui/css/onsenui.css'
import onsenuicomponents from 'onsenui/css/onsen-css-components.css'

const ipc = require('electron').ipcRenderer;
console.log(ipc);

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            products: ['None']
        }

        ipc.send('App', 'test');

        ipc.on('getProducts', (event, arg) => {
            console.log(arg)
            let products = arg.map(item => item.name)
            this.setState({
                products
            })

        })
    }

    hide = () => {
        this.setState({isOpen: false});
    }

    show = () => {
        this.setState({isOpen: true});
    }

    handleClick = () => {
        this.show();
        ons.notification.alert('Hello world!');
    }

    renderToolbar = () => {
        return (
            <Toolbar>
                <div className='left'>
                    <ToolbarButton onClick={this.show}>
                        <Icon icon='ion-navicon, material:md-menu'></Icon>
                    </ToolbarButton>
                </div>
                <div className='center'>Product Manager</div>
            </Toolbar>
        );
    }


    render() {
        return (
            <Splitter>
                <SplitterSide
                    style={{
                        boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)'
                    }}
                    side='left'
                    width={200}
                    collapse={true}
                    //isSwipeable={true}
                    isOpen={this.state.isOpen}
                    onClose={this.hide}
                    onOpen={this.show}
                >
                    <Page>
                        <List
                            dataSource={this.state.products}
                            renderRow={(title) => (
                                <ListItem key={title} onClick={this.hide} tappable>{title}</ListItem>
                            )}
                        />
                    </Page>
                </SplitterSide>
            <SplitterContent>
                <Page renderToolbar={this.renderToolbar}>
                    <p style={{textAlign: 'center'}}>
                        <Button onClick={this.handleClick}>
                            Click me!
                        </Button>
                    </p>
                </Page>
            </SplitterContent>
        </Splitter>
        );
    }
}