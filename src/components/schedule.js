import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

import Session from '../components/session.js';

//Each session's start and end time.
const sessionTimes = [[new Date(2018, 4, 26, 10, 10, 0, 0), new Date(2018, 4, 26, 10, 49, 0, 0)],
					  [new Date(2018, 4, 26, 11, 10, 0, 0), new Date(2018, 4, 26, 11, 49, 0, 0)],
					  [new Date(2018, 4, 26, 12, 10, 0, 0), new Date(2018, 4, 26, 12, 49, 0, 0)],
					  [new Date(2018, 4, 26, 13, 10, 0, 0), new Date(2018, 4, 26, 13, 49, 0, 0)]
					 ];

class Schedule extends Component {
	
	constructor(props) {
		super(props);
		
		this.state = {currentSpeaker:<div />};
		
		this.getTimeSlot = this.getTimeSlot.bind(this);
		this.getCurrent = this.setCurrent.bind(this);
	}
	
	getTimeSlot() {
		var i = 0;
		while (i < sessionTimes.length && Date.now() < sessionTimes[i]) {
			i++;
		}
		return i;
	}
	
	setCurrent(speaker) {
		this.setState({currentSpeaker:speaker});
	}
	
	render() {
		var slot = this.getTimeSlot();
		return (
			<div>
				{this.state.currentSpeaker}
				<div className={css(styles.schedule)} >
					<Session speakers={[
						{name:"Erin Jones", talk:"Being a Champion for Change", time:"11:00 AM", img:"http://tedxuofw.com/media/speakers-2017/erin-jones.jpg",},
						{name:"Erin Jones", talk:"Being a Champion for Change", time:"11:00 AM", img:"http://tedxuofw.com/media/speakers-2017/erin-jones.jpg",},
						{name:"Erin Jones", talk:"Being a Champion for Change", time:"11:00 AM", img:"http://tedxuofw.com/media/speakers-2017/erin-jones.jpg",}
						]}
					/>
				</div>
			</div>
		);
	}
}


const styles = StyleSheet.create({
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

export default Schedule;