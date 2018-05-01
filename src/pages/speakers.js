import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';

import Speaker from '../components/speaker';
import TEDMenu from '../components/ted-menu.js';

import speakers from '../data/data.js';
import { speakerNames } from '../data/data.js';

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
	
	getSpeaker(speaker) {
		if (speakerNames.indexOf(speaker.name) > -1) {
			return (<Speaker
				name={speaker.name}
				talk={speaker.talk}
				description={speaker.description}
				x="0"
				y="-20vw"
				img={speaker.img}
				key={Math.random()}
			/>);
		} else {
			return <div />
		}
	}
    
	render() {
		
		var speakerlist = speakers.map(this.getSpeaker);
		
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
					
					
					{speakerlist}
					
 
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