import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

import SpeakerPreview from '../components/preview.js';
import SpeakerCurrent from '../components/current.js';
import SessionTitle from '../components/sessiontitle.js';

class Session extends Component {
	
	constructor(props) {
		super(props);
		
		this.getTimeSlot = this.getTimeSlot.bind(this);
	}
	
	getTimeSlot() {
		var minutes = this.props.time / (1000 * 60);
		var minsPerSpeaker = this.props.speakers.length;
		return Math.floor(minutes / minsPerSpeaker);
	}
	
	render() {
		var slot = this.getTimeSlot();
		if (slot >= 0 && slot < this.props.speakers.length) {
			this.props.setCurrent(<SpeakerCurrent info={this.props.speakers[slot]} />);
		}
		var speakerPreviews = this.props.speakers.map((speaker, index) => (
				<SpeakerPreview 
					name={speaker.name}
					talk={speaker.talk}
					time={speaker.time}
					shift={speaker.shift}
					img={speaker.img}
					highlight={slot >= index}
					key={Math.random()}
				/>
			));
		return (
			<div>
				<SessionTitle name="Session 1" time="10:10 AM - 10:49 AM" />
				{speakerPreviews}
			</div>
		);
	}
}

export default Session;