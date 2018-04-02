import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import TEDMenu from '../components/ted-menu.js';
import SpeakerPreview from '../components/preview.js';


class Home extends Component {
    
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
            
                        style={{
                            boxShadow: 'none'      
                        }}            
            
                        iconClassNameRight="muidocs-icon-navigation-expand-more" 
            
                        onLeftIconButtonClick={this.openMenu}
                    />

            
                    <div className={css(styles.currentImage)}>
                        <img alt="Erin Jones" src="http://tedxuofw.com/media/speakers-2017/erin-jones.jpg" />
                        <div className={css(styles.overlay)}>
                            <div className={css(styles.overlayContent)}>
                                <div className={css(styles.upnext)}>Up Next</div>
                                <div className={css(styles.name)}>Erin Jones</div>
                                <div className={css(styles.talk)}>Being a Champion of Change</div>
                            </div>
                        </div>
                    </div>
                                                
                    <div className={css(styles.schedule)}>
                        <SpeakerPreview 
                            name="Erin Jones"
                            talk="Being a Champion for Change"
                            time="11:00 AM"
                            img="http://tedxuofw.com/media/speakers-2017/erin-jones.jpg"

                            shift="-40px"
                        />

                        <SpeakerPreview 
                            name="Erin Jones"
                            talk="Being a Champion for Change"
                            time="11:00 AM"
                            img="http://tedxuofw.com/media/speakers-2017/erin-jones.jpg"
                        />

                        <SpeakerPreview 
                            name="Erin Jones"
                            talk="Being a Champion for Change"
                            time="11:00 AM"
                            img="http://tedxuofw.com/media/speakers-2017/erin-jones.jpg"
                        />

                        <SpeakerPreview 
                            name="Erin Jones"
                            talk="Being a Champion for Change"
                            time="11:00 AM"
                            img="http://tedxuofw.com/media/speakers-2017/erin-jones.jpg"
                        />
                    </div>
                    
                    <TEDMenu open={this.state.open} close={this.closeMenu} />
                </div>
			</MuiThemeProvider>

		);
	}
}

const styles = StyleSheet.create({
    currentImage: {
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        maxHeight: '45%',
        overflow: 'hidden',
    }, 
    overlay: {
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        background: 'rgba(0, 0, 0, 0.2)'
    },
    overlayContent: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        
        padding: '5%',
    },
    upnext: {
        fontFamily: 'Avenir',
        color: 'white',
        fontSize: '14px',
    }, 
    name: {
        fontFamily: 'Avenir',
        color: 'white',
        fontWeight: 'bold',
        fontSize: '28px'
    },
    talk: {
        fontFamily: 'Avenir',
        color: 'white',
        fontSize: '16px'
    },
    schedule: {
        background: '#ecf0f1',
        position: 'absolute',
        bottom: '0',
        left: '0',
        right: '0',
        width: '100%',
        height: '55%',
        maxHeight: '55%',
        overflowY: 'scroll',
        overflowX: 'hidden'
    },
    
});


const muiTheme = getMuiTheme({
    palette: {
        textColor: '#fff'
    },
    appBar: {
        color: 'rgba(230, 43, 37, 0)',
    },
});

export default Home;