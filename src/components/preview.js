import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import PropTypes from 'prop-types';

class SpeakerPreview extends Component {
    
	render() {  
        
        let imageStyles = {
            width: '100%',
            height: 'auto',
            position: 'absolute',
            top: ((this.props.shift) ? this.props.shift : '0') ,
        }
        
		return (
                <div className={css(styles.scheduleItem)}>
                    <div className={css(styles.scheduleTimeHolder)}>
                        <div className={css(styles.scheduleTime)}>
                            {this.props.time}
                        </div>
                    </div>
                    <div className={css(styles.scheduleContent)}>
                        <img style={imageStyles} alt={this.props.name} src={this.props.img} />

                        <div className={css(styles.overlay)}>
                            <div className={css(styles.scheduleOverlay)}>
                                <div><b>{this.props.name}</b></div>
                                <div>{this.props.talk}</div>
                            </div>
                        </div>
                    </div>
                </div>

		);
	}
}

const styles = StyleSheet.create({
    scheduleItem: {
        height: '75px',
        width: '100%',
        margin: '10%',
    },
    scheduleTimeHolder: {
        float: 'left',
        height: '100%',
        width: '15%',
        background: 'rgba(230, 43, 37, 1)',
        
        color: 'white',
        fontFamily: 'Avenir',
        fontSize: '15px',
        textAlign: 'center',
        display: 'table',
    },
    scheduleTime: {
        display: 'table-cell',
        verticalAlign: 'middle'        
    },
    scheduleContent: {
        position: 'relative',
        width: '65%',
        height: '100%',
        marginRight: '10%',
        
        maxHeight: '100%',
        maxWidth: '65%',
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
    }
});


SpeakerPreview.propTypes = {
    time: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    img : PropTypes.string.isRequired,
    talk: PropTypes.string.isRequired,
    
    shift: PropTypes.string
}

export default SpeakerPreview;