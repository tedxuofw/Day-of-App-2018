import React, { Component } from 'react';

import SpeakerPreview from '../components/preview.js';
import SpeakerCurrent from '../components/current.js';

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
					img={speaker.img}
					highlight={index >= slot}
					key={Math.random()}
					shift={slot > 0 ? "0px" : "-40px"} //Only shift first element
				/>
			));
		console.log(speakerPreviews);
		return (
			<div>
				{speakerPreviews}
			</div>
		);
	}
}

export default Session;