import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';


class Description extends Component {
	
	constructor() {
		super();
		
		this.state = {
			index:0,
		};
		
		this.increment = this.increment.bind(this);
	}
	
	increment() {
		if (this.state.index < 2) {
			this.setState({index:this.state.index+1});
		} else {
			this.setState({index:0});
		}
	}
    
	render() {
		var red = {
			color:'rgba(230, 43, 37, 1)',
		};
		var gray = {
			color:'#f5f5f5',
		};
		var black = {
			color:'black',
		};
		
		var aboutTed = (
			<div className={css(styles.textContainer)}>
				<p style={black} className={css(styles.title1)}> About </p>
				<p style={red} className={css(styles.title)}> TED</p>
				<p style={gray} className={css(styles.title)}>x</p>
				<p style={gray} className={css(styles.title)}>UofW</p>
				<br />
				<p style={black} className={css(styles.text)}> <span style={red}>TED</span> is a nonprofit organization devoted to Ideas Worth Spreading. Started as a four-day conference in California 30 years ago, TED has grown to support its mission with multiple initiatives. The two annual TED Conferences invite the world's leading thinkers and doers to speak for 18 minutes or less. Many of these talks are then made available, free, at TED.com. TED speakers have included Bill Gates, Jane Goodall, Elizabeth Gilbert, Sir Richard Branson, Nandan Nilekani, Philippe Starck, Ngozi Okonjo-Iweala, Sal Khan and Daniel Kahneman. The annual TED Conference takes place each spring in Vancouver, British Columbia. </p>
			</div>
		);
		var aboutTedx = (
			<div className={css(styles.textContainer)}>
				<p style={black} className={css(styles.title1)}> About </p>
				<p style={red} className={css(styles.title)}> TED</p>
				<p style={red} className={css(styles.title)}>x</p>
				<p style={gray} className={css(styles.title)}>UofW</p>
				<br />
				<p style={black} className={css(styles.text)}> In the spirit of ideas worth spreading, <span style={red}>TEDx</span> is a program of local, self-organized events that bring people together to share a TED-like experience. At a TEDx event, TED Talks video and live speakers combine to spark deep discussion and connection. These local, self-organized events are branded TEDx, where x = independently organized TED event. The TED Conference provides general guidance for the TEDx program, but individual TEDx events are self-organized. (Subject to certain rules and regulations.) </p>
			</div>
		);
		var aboutTedxUofW = (
			<div className={css(styles.textContainer)}>
				<p style={black} className={css(styles.title1)}> About </p>
				<p style={red} className={css(styles.title)}> TED</p>
				<p style={red} className={css(styles.title)}>x</p>
				<p style={red} className={css(styles.title)}>UofW</p>
				<br />
				<p style={black} className={css(styles.text)}> <span style={red}>TEDxUofW</span> is established to bring inspirational and informative TED style talks to the University of Washington. Since 2012, our organization has sought to give amazing speakers a receptive audience to share their passion. Our all student-run organization has put on a sold-out event for four years in a row, gathering a collection of great creative thinkers, scientific minds, community leaders, and much more.</p>
			</div>
		);
		switch (this.state.index) {
			case 0: return (
				<div className={css(styles.container)} onSubmit={this.increment} >
					{aboutTed}
					<form>
						<input type="button" onClick={this.increment} value=">" className={css(styles.button)} 
							style={{WebkitAppearance: 'none', borderRadius: '0',}}/>
					</form>
				</div>
			);
			case 1: return (
				<div className={css(styles.container)} onSubmit={this.increment} >
					{aboutTedx}
					<form>
						<input type="button" onClick={this.increment} value=">" className={css(styles.button)} 
							style={{WebkitAppearance: 'none', borderRadius: '0',}}/>
					</form>
				</div>
			);
			case 2: return (
				<div className={css(styles.container)} onSubmit={this.increment} >
					{aboutTedxUofW}
					<form>
						<input type="button" onClick={this.increment} value=">" className={css(styles.button)} 
							style={{WebkitAppearance: 'none', borderRadius: '0',}}/>
					</form>
				</div>
			);
			default: return <div className={css(styles.container)} />;
		}
	}
}

const styles = StyleSheet.create({
    container: {
		position:'absolute',
        height: '75%',
		width:'81%',
        fontFamily: 'Avenir',
        paddingLeft: '9%',
		
    }, 
	textContainer: {
		width:'100%',
		height:'75%',
		marginTop:'20px',
		
		overflowY:'scroll',
	},
	title: {
		fontFamily: 'AvenirBlack',
		fontSize:'9vw',
		marginLeft:'0px',
		marginRight:'0px',
		marginTop:'50px',
		marginBottom:'15px',
		display:'inline-block',
	},
	title1: {
		fontFamily: 'AvenirBlack',
		fontSize:'9vw',
		marginLeft:'0px',
		marginRight:'10px',
		marginTop:'50px',
		marginBottom:'15px',
		display:'inline-block',
	},
	text: {
		fontFamily: 'Avenir',
		fontSize:'12px',
		display:'inline-block',
	},
	button: {
		backgroundColor:'rgba(230, 43, 37, 1)',
		color:'white',
		fontWeight:'bold',
		fontSize:'30px',
		lineHeight:'20px',
		border:'none',
		width:'100%',
		height:'30px',
		marginTop:'60px',
	},
});

export default Description;