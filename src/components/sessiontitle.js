import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

class SessionTitle extends Component {
	render() {
		return (
			<div className={css(styles.container)}> 
				<div className={css(styles.item)}>
					<p className={css(styles.name)}> {this.props.name} </p>
					<p className={css(styles.time)}> {this.props.time} </p>
				</div>
			</div>
		);
	}
}


const styles = StyleSheet.create({
	container: {
        height: '75px',
        width: '100%',
        margin: '10%',
	},
	item: {
		background: 'rgba(230, 43, 37, 1)',
		position: 'relative',
        width: '80%',
        height: '100%',
        marginRight: '10%',
        
        maxHeight: '100%',
        maxWidth: '80%',
        overflow: 'hidden',
		textAlign:'center',
	},
	name: {
		fontFamily: 'Avenir',
        color: 'white',
        fontWeight: 'bold',
        fontSize: '13px',
		textTransform:'uppercase',
		
		marginTop:'20px',
		marginBottom:'5px',
	},
	time: {
		fontFamily: 'Avenir',
        color: 'white',
        fontSize: '13px',
		
		marginTop:'2px',
		marginBottom:'0px',
	},
});

export default SessionTitle;