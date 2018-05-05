import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import PropTypes from 'prop-types';


import Modal from 'react-modal';


class Speaker extends Component {
    
    constructor() {
        super();
        this.state = {
            open: false,
        };
        
        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }
    
    componentWillMount() {
        Modal.setAppElement('body');
    }
    
	handleOpen = () => {
		this.setState({ open: true });
	};

	handleClose = () => {
		this.setState({ open: false });
	};
    
	render() {
        
        let imageStyles = {
            top: ((this.props.y) ? this.props.y : '0') ,
            left: ((this.props.x) ? this.props.x : '0') ,
        }        
        
        
		return (
            <div className={css(styles.paper)} >
                <img alt={this.props.name} className={css(styles.img)} src={this.props.img} style={imageStyles} onClick={this.handleOpen}/>
                <span className={css(styles.overlay)} onClick={this.handleOpen}>
                    <div className={css(styles.text)} style={{textTransform: 'uppercase', fontWeight: 'bold'}}>
                        {this.props.name}
                    </div>
                    <div className={css(styles.text)} style={{fontSize: '18px'}}>
                        {this.props.talk}
                    </div>
                </span>
                        
                <span className={css(styles.button)}>
                    <svg width="22" height="25" viewBox="0 0 52 45">
            
                        <g id="Canvas" transform="translate(-1006 -1)">
                            <g id="speech-bubble-18">
                                <use xlinkHref="#path0_fill" transform="translate(1006 1)" fill="#FFFFFF"/>
                            </g>
                        </g>
                        <defs>
                            <path id="path0_fill" fillRule="evenodd" d="M 41.9314 4.88238L 41.9314 24.3039C 41.9314 26.9935 39.7753 29.1863 37.1414 29.1755L 15.6234 29.1755L 9.55884 36.3154C 9.18707 36.7475 8.65607 36.9959 8.10376 36.9959C 7.03107 36.9959 6.17078 36.121 6.17078 35.0408L 6.17078 29.1863L 4.80066 29.1863C 2.15607 29.1863 0 26.9935 0 24.3039L 0 4.88238C 0 2.19275 2.15607 0 4.80066 0L 37.1307 0C 39.7753 0 41.9314 2.19275 41.9314 4.88238ZM 14.0302 26.9935C 14.2851 26.7019 14.6356 26.5398 15.0179 26.5398L 37.1307 26.5398C 38.3416 26.5398 39.3292 25.5353 39.3292 24.3039L 39.3292 4.88238C 39.3292 3.65098 38.3416 2.64642 37.1307 2.64642L 4.80066 2.64642C 3.58984 2.64642 2.60211 3.65098 2.60211 4.88238L 2.60211 24.2931C 2.60211 25.5245 3.58984 26.529 4.80066 26.529L 7.45587 26.529C 8.1781 26.529 8.76227 27.1231 8.76227 27.8577L 8.76227 33.1829L 14.0302 26.9935ZM 42.4518 44.3195C 42.8235 44.7624 43.3546 45 43.8962 45C 44.1193 45 44.3529 44.9568 44.576 44.8704C 45.3407 44.5787 45.8292 43.8658 45.8292 43.0341L 45.8292 37.1796L 47.1993 37.1796C 49.844 37.1796 52 34.9868 52 32.2972L 52 12.8757C 52 10.186 49.844 7.99328 47.1993 7.99328C 46.4772 7.99328 45.8929 8.58737 45.8929 9.31109C 45.8929 10.0456 46.4772 10.6397 47.1993 10.6397C 48.4102 10.6397 49.3979 11.6443 49.3979 12.8757L 49.3979 32.2972C 49.3979 33.5286 48.4102 34.5331 47.1993 34.5331L 44.5336 34.5331C 43.8113 34.5331 43.2272 35.1272 43.2272 35.8617L 43.2272 41.187L 37.9591 34.9976C 37.7148 34.706 37.3538 34.5439 36.9714 34.5439L 17.429 34.5439C 16.7067 34.5439 16.1226 35.138 16.1226 35.8725C 16.1226 36.6071 16.7067 37.2011 17.429 37.2011L 36.3766 37.2011L 42.4518 44.3195ZM 22.5164 15.0576C 22.5164 15.9286 21.8221 16.6347 20.9657 16.6347C 20.1093 16.6347 19.415 15.9286 19.415 15.0576C 19.415 14.1866 20.1093 13.4806 20.9657 13.4806C 21.8221 13.4806 22.5164 14.1866 22.5164 15.0576ZM 26.1593 16.6347C 27.0157 16.6347 27.71 15.9286 27.71 15.0576C 27.71 14.1866 27.0157 13.4806 26.1593 13.4806C 25.3029 13.4806 24.6086 14.1866 24.6086 15.0576C 24.6086 15.9286 25.3029 16.6347 26.1593 16.6347ZM 17.3228 15.0576C 17.3228 15.9286 16.6285 16.6347 15.7721 16.6347C 14.9157 16.6347 14.2214 15.9286 14.2214 15.0576C 14.2214 14.1866 14.9157 13.4806 15.7721 13.4806C 16.6285 13.4806 17.3228 14.1866 17.3228 15.0576Z"/>
                        </defs>
                    </svg>
                </span>   
                <SpeakerModal
                    isOpen={this.state.open}
                    onRequestClose={this.handleClose}
                    img={this.props.img}
                    name={this.props.name}
                    company={this.props.company}
                    role={this.props.role}
                    description={this.props.description}
                />       
            </div>
		);
	}
}

export class SpeakerModal extends Component {
    render() {
        return (
            <Modal
                isOpen={this.props.isOpen}
                onRequestClose={this.props.onRequestClose}
                style={speakerDialogStyles}
                contentLabel=""
            >
              <center>
                  <img alt={this.props.name} className={css(styles.modalImg)} src={this.props.img} />
                  
                  <div className={css(styles.modalName)}>{this.props.name}</div>
                  <div className={css(styles.modalCompany)}>{this.props.company}</div>
                  <div className={css(styles.modalRole)}>{this.props.role}</div>
                  
                  <hr className={css(styles.modalLine)} />
                  <div className={css(styles.modalDescription)}>{this.props.description}</div>
                  
                  
                  <a href={"http://qa.tedxuofw.com/#/" + this.props.name.split(" ")[0].toLowerCase()}> <button className={css(styles.modalButton)}>Ask me a Question</button> </a>
                  <div className={css(styles.modalClose)} onClick={this.props.onRequestClose}>close</div>

              </center>
          </Modal>
        );
    }
}

const speakerDialogStyles = {
    content : {
        top: '3%',
        left: '3%',
        right: '3%',
        bottom: '3%',
        position: 'absolute',
        background: 'none',
        border: 'none'
    }, 
    overlay: {
        zIndex: 9998,
        background: 'rgba(0, 0, 0, 0.8)',
    }
};

const styles = StyleSheet.create({
    paper: {
        height: '225px',
        width: '100%',
        lineHeight: '200px',
        fontSize: '26px',
        fontFamily: 'Avenir',
        marginTop: '10px',
        marginBottom: '20px',
        
        position: 'relative',
        overflow: 'hidden',
        boxSizing: 'border-box'
    },
    img: {
        width: '85%',
        background: 'lightgray',
        
        position: 'absolute',
        margin: 'auto',
        marginLeft: '0',
        height: 'auto'
    },
    overlay: {
        position: 'absolute',
        color: 'white',
        top: '57%',
        left: '8%',
		maxWidth:'77%',
    },
    text: {
        lineHeight: '25px'
    },
    button: {
        position: 'absolute',
        width: '15%',
        height: '100%',
        top: '0',
        right: '0',
        background: 'rgb(230, 43, 37)',
        textAlign: 'center',
        
        ":active" : {
            background: 'rgba(189, 27, 21)',
        }
        
    },
    modalImg: {
        width: '40%',
        height: 'auto'
    },
    modalName: {
        fontWeight: 'bold', 
        fontSize: '28px',
        color: 'white',
        fontFamily: "Avenir"
    },
    modalCompany: {
        fontWeight: 'bold',
        color: 'white',
        fontFamily: "Avenir",
        fontSize: '18px',
    },
    modalRole: {
        color: 'white',
        fontFamily: "Avenir",
        fontSize: '16px'
    },
    modalLine: {
        border: 'none',
        height: '10px',
        color: 'white',
        backgroundColor: 'white'
    },
    modalDescription: {
        color: 'white',
        fontFamily: "Avenir",
        textAlign: 'left',
        marginBottom: '10px',
        fontSize: '16px',
        display: 'block'

    },
    modalButton: {
        background: 'rgb(230, 43, 37)',
        color: 'white',
        padding: '10px',
        paddingLeft: '20px',
        paddingRight: '20px',
        textTransform: 'uppercase',
        border: 'none',
        fontSize: '16px',
        fontFamily: 'Avenir',
        margin: '5px'
        
    },
    modalClose: {
        textDecoration: 'underline',
        fontFamily: 'Avenir',
        color: 'lightgray'
    }
});

Speaker.propTypes = {
    name: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,    
}

export default Speaker;