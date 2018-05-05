import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

import SpeakerPreview from '../components/preview.js';
import SpeakerCurrent from '../components/current.js';
import SessionTitle from '../components/sessiontitle.js';

class Session extends Component {
	
	render() {
		var speakerPreviews = this.props.speakers.map((speaker, index) => (
			<SpeakerPreview 
				name={speaker.name}
				talk={speaker.talk}
				time={speaker.time}
				shift={speaker.shift}
				img={speaker.img}
				highlight={this.props.now > Date.parse(speaker.start) && this.props.now < Date.parse(speaker.end)}
				key={Math.random()}
			/>
			));
		return (
			<div>
				<SessionTitle now={this.props.now} name={this.props.title} times={this.props.times} text={this.props.text}/>
				{speakerPreviews}
			</div>
		);
	}
}

export default Session;