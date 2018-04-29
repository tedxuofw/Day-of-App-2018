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
        height: '55px',
        width: '100%',
        marginTop: '10%',
		marginBottom: '4%',
		marginLeft: '7%',
	},
	item: {
		background: 'rgba(230, 43, 37, 1)',
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