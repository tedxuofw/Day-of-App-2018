import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';

import Speaker from '../components/speaker';
import TEDMenu from '../components/ted-menu.js';



class Speakers extends Component {
    constructor() {
        super();
        this.state = {
            open: false,
        };
        
        this.openMenu = this.openMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
    }
    
	openMenu() {
		this.setState({ open: true });
	};

	closeMenu() {
		this.setState({ open: false });
	};
    
	render() {
		return (

			<MuiThemeProvider muiTheme={muiTheme}>
                <div>
                    
                    <AppBar 
                        title="TEDxUofW 2018"
                        titleStyle={{
                            fontSize: '16px',
                            fontWeight:'bold',
                            textAlign: 'center'
                        }} 
                        iconClassNameRight="muidocs-icon-navigation-expand-more" 
                        onLeftIconButtonClick={this.openMenu}
                    />

                    <Paper className={css(styles.paper)} zDepth={0} rounded={false} >
                        <b>2018 Speakers </b>
                    </Paper>

                    <Speaker 
                        name="Erin Jones" 
                        talk="Being a Champion of Change" 
                        
                        company="Office of Public Instruction"
                        role="Superintendent"
                        
                        description="Rin Erin Jones has been working in and around schools for the past 25 years. She has taught in a variety of environments, from predominantly African American to predominantly White to some of the most diverse communities in the nation. Erin received an award as the Most Innovative Foreign Language Teacher in 2007, while teaching French Immersion at"
                        
                        img="http://tedxuofw.com/media/speakers-2017/erin-jones.jpg" 
                        x="0"
                        y="-75px"
                        
                        />
 
                    <TEDMenu open={this.state.open} close={this.closeMenu} />
                </div>
			</MuiThemeProvider>

		);
	}
}

const styles = StyleSheet.create({
    paper: {
        height: '75px',
        lineHeight: '75px',
        fontSize: '26px',
        fontFamily: 'Avenir',
        paddingLeft: '9%',
    }, 
});


const muiTheme = getMuiTheme({
    palette: {
        textColor: '#000'
    },
    appBar: {
        color: 'rgba(230, 43, 37, 1)',
    },
});

export default Speakers;