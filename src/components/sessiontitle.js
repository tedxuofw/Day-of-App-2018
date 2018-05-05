import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

class SessionTitle extends Component {
	render() {
		var subtext = "";
		if (typeof this.props.times !== undefined) {
			subtext = this.props.times[0].toTimeString() + " - " + this.props.times[1].toTimeString();
		}
		if (typeof this.props.text !== undefined) {
			subtext=this.props.text;
		}
		
		var style = {backgroundColor:'gray'}
		if (this.props.now > this.props.times[0].getTime()) {
			style = {background: 'rgba(230, 43, 37, 1)'}
		}
		
		return (
			<div className={css(styles.container)}> 
				<div style={style} className={css(styles.item)}>
					<p className={css(styles.name)}> {this.props.name} </p>
					<p className={css(styles.time)}> {subtext} </p>
				</div>
			</div>
		);
	}
}


const styles = StyleSheet.create({
	container: {
        height: '55px',
        width: '100%',
        marginTop: '10%',
		marginBottom: '4%',
		marginLeft: '7%',
	},
	item: {
		textAlign:'center',
		position: 'relative',
        width: '86%',
        height: '100%',
        marginRight: '7%',
        
        maxHeight: '100%',
        maxWidth: '86%',
        overflow: 'hidden',
		
	},
	name: {
		fontFamily: 'Avenir',
        color: 'white',
        fontWeight: 'bold',
        fontSize: '11px',
		textTransform:'uppercase',
		
		marginTop:'10px',
		marginBottom:'2px',
	},
	time: {
		fontFamily: 'Avenir',
        color: 'white',
        fontSize: '11px',
		
		marginTop:'2px',
		marginBottom:'0px',
	},
});

export default SessionTitle;