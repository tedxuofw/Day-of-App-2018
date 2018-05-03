import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import PropTypes from 'prop-types';

class SpeakerPreview extends Component {
    
	render() {  
        
        let imageStyles = {
            width: '100%',
            height: 'auto',
            position: 'absolute',
			margin:'auto',
            top: ((this.props.shift) ? this.props.shift : '0') ,
        }
		
		var style = {opacity:'0'};
		if (typeof this.props.highlight !== undefined) {
			if (this.props.highlight) {
				style = {opacity:'.4'};
			}
		}
        
		return (
                <div className={css(styles.scheduleItem)}>
					
                    <div className={css(styles.scheduleContent)}>
                        <img style={imageStyles} alt={this.props.name} src={this.props.img} />
						
                        <div className={css(styles.overlay)}>
                            <p className={css(styles.name)}>{this.props.name}</p>
                            <p className={css(styles.talk)}>{this.props.talk}</p>
                        </div>
						
						<div style={style} className={css(styles.cover)}/>
                    </div>
                </div>

		);
	}
}

const styles = StyleSheet.create({
    scheduleItem: {
        height: '75px',
        width: '100%',
        marginTop: '4%',
		marginBottom: '4%',
		marginLeft: '7%',

    },
	cover: {
		position:'absolute',
		width:'100%',
		height:'100%',
		backgroundColor:'rgba(230, 43, 37, 1)',
	},
    scheduleContent: {
        position: 'relative',
        width: '86%',
        height: '100%',
        marginRight: '7%',
        
        maxHeight: '100%',
        maxWidth: '86%',
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
    scheduleOverlay: {
        position: 'absolute',
        bottom: '0',
        left: '0',
        padding: '5%',
        
        color: 'white',
        fontFamily: 'Avenir',
        fontSize: '13px',
    },
	name: {
		fontFamily:'AvenirBlack',
		fontSize:'18px',
		fontWeight:'bold',
		marginTop:'10px',
		marginBottom:'0px',
		marginLeft:'5%',
		marginRight:'5%',
		color:'white',
	},
	talk: {
		fontFamily:'Avenir',
		fontSize:'14px',
		marginTop:'0px',
		marginBottom:'0px',
		marginLeft:'5%',
		marginRight:'5%',
		color:'white',
	},
});


SpeakerPreview.propTypes = {
    name: PropTypes.string.isRequired,
    img : PropTypes.string.isRequired,
    talk: PropTypes.string.isRequired,
    
    shift: PropTypes.string
}

export default SpeakerPreview;