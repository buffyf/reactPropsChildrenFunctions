import React, { Component } from 'react';

const styles = {
    headerStyle: {
        background: "lightblue",
        textAlign: "center",
        position: "fixed",
        top: "0",
        width: "100%",
        padding: "1rem",
        fontSize: "2rem"

    },
    navStyle: {
        color: "red"

    }
};

export default class Header extends Component {
    render() {
        return (
            <div style={styles.headerStyle}>
                <nav style={styles.navStyle}>I am the Navigation Bar</nav>
            </div>
        )
    }
}
