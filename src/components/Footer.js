import React, { Component } from 'react';
const styles = {
    footerDivStyle: {
        background: "lightgreen",
        textAlign: "center",
        position: "fixed",
        bottom: "0",
        width: "100%",
        padding: "1rem",
        fontSize: "2rem"


    },
    footerStyle: {
        color: "purple"

    }
};
export default class Footer extends Component {
    render() {
        return (
            <div style={styles.footerDivStyle}>
                <footer style={styles.footerStyle}>I am the Footer</footer>
            </div>
        )
    }
}
