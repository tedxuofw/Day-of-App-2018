import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

import Session from '../components/session.js';
import SessionTitle from '../components/sessiontitle.js';

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
						{name:"Kristi Straus", talk:"", shift:"-95px", img:"/resources/kristi.png",},
						{name:"Ansel Santosa", talk:"", shift:"-120px", img:"/resources/ansel.png",},
						{name:"Heather Evans", talk:"", shift:"-100px", img:"/resources/heather.png",},
						{name:"Aura", talk:"", shift:"-120px", img:"/resources/ansel.png",},
						{name:"Dr. Bezruchka", talk:"", shift:"-120px", img:"/resources/bezruchka.jpg",},
						{name:"John Sinclair", talk:"", shift:"-140px", img:"/resources/john.png",}
						]}
					/>
					<SessionTitle name="lunch" time="Food and drink provided in the lobby." />
					<Session speakers={[
						{name:"Fauzia Lala", talk:"", shift:"-150px", img:"/resources/fauzia.png",},
						{name:"Andrea Weatherhead", talk:"", shift:"-140px", img:"/resources/andrea.png",},
						{name:"Tyler Valentine", talk:"", shift:"-170px", img:"/resources/tyler.png",},
						{name:"Sarah Myhre", talk:"", shift:"-100px", img:"/resources/sarah.png",},
						{name:"Jeffery Lew", talk:"", shift:"-150px", img:"/resources/jeffery.png",},
						{name:"Izdihar Bailey", talk:"", shift:"-130px", img:"/resources/izdihar.png",},
						{name:"Karen Litfin", talk:"", shift:"-100px", img:"/resources/karen.png",},
						{name:"Tarah Wheeler", talk:"", shift:"-130px", img:"/resources/tarah.png",},
						{name:"Jeanne Suchodolski", talk:"", shift:"-70px", img:"/resources/jeanne.png",},
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