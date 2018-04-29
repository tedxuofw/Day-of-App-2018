import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

class SpeakerCurrent extends Component {
	render() {
		return (
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
});

export default SpeakerCurrent;