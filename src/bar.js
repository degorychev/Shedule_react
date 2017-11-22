import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import { List, ListItem } from 'material-ui/List';
import { Link, BrowserRouter } from 'react-router-dom';

/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */

export default class Bar extends Component {
    constructor(props) {
        super(props);
        this.state = {
          open: false
        };
        this.handleToggle = this.handleToggle.bind(this);
    }

    handleToggle() {
        this.setState({ open: !this.state.open });
    }

    render() {
        return (
            <div>
                <AppBar
                onLeftIconButtonTouchTap={this.handleToggle}
                title="Расписание ИАТУ"
                />
                <Drawer
                docked={false}
                width={200}
                open={this.state.open}
                onRequestChange={(open) => this.setState({ open })}
                >
                    <BrowserRouter>
                        <List>
                            <ListItem
                            onClick={this.handleToggle}
                            primaryText="Главная"
                            containerElement={<Link to="/" />}
                           />
                            <ListItem
                            onClick={this.handleToggle}
                            primaryText="О приложении"
                            containerElement={<Link to="/about" />}
                            />
                        </List>
                    </BrowserRouter>
                </Drawer>
            </div>
        );
    }
}