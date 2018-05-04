import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';


class Landing extends Component {
    

	render() {
		return (
            <div className={css(styles.container)}>
            
                <center>
                <img className={css(styles.logo)} src="./resources/logo-red.png" /> </center>
                <div className={css(styles.title)}>
                    Trying to get a sneak peek at our awesome <a className={css(styles.link)} href="http://tedxuofw.com/#/speakers" target="_blank" >selection of speakers</a>?
                </div>
                <div className={css(styles.subtitle)}>
                    We don't blame you.
                </div>

                                
                <div className={css(styles.text)}>
                    Check back on May 5th once the conference starts. If you want to find out more about our conference, check out <a className={css(styles.link)} target="_blank" href="https://tedxuofw.com">https://tedxuofw.com</a>
                </div>
            </div>
		);
	}
}



const styles = StyleSheet.create({
    container: {
		position:'absolute',
        padding: '12%',
        fontFamily: 'Avenir',
    },
    title: {
        marginTop: '10%',
        color: 'rgba(230, 43, 37, 1)',
        fontSize: '28px',
        fontWeight: 'bold',
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale'
    },
    subtitle: {
        color: 'rgba(65, 65, 65, 0.9)',
        fontSize: '22px',
        fontWeight: 'bold'
    },
    text: {
        marginTop: '10%',
        fontSize: '20px',
        textAlign: 'justify'
    },
    link: {
        color: 'inherit'
    },
    logo: {
        width: '60%'
    }
});

export default Landing;