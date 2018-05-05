import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

class SpeakerCurrent extends Component {
	render() {
		var speakers = this.props.speakers;
		var speaker = {name:'Intermission', img:'/resources/tedx.jpg', talk:''};
		for (var i = 0; i < speakers.length; i++) {
			if (this.props.now > Date.parse(speakers[i].start) 
					&& this.props.now < Date.parse(speakers[i].end)) {
				speaker = speakers[i];
				break;
			}
		}
		
		
		return (
			<div className={css(styles.currentImage)}>
				<img style={{position:'relative', width:'100%', top:'-70px'}} alt={speaker.name} src={speaker.img} />
				<div className={css(styles.overlay)}>
					<div className={css(styles.overlayContent)}>
						<div className={css(styles.upnext)}>Current Event</div>
						<div className={css(styles.name)}>{speaker.name}</div>
						<div className={css(styles.talk)}>{speaker.talk}</div>
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
        maxHeight: '35%',
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