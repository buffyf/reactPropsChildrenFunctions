import React, { Component } from 'react';
const styles = {
    displayStyle: {
        color: "pink"
    }
};
export default class DisplayComponent extends Component {
    render() {
        return (
            <div style={styles.displayStyle}>{this.props.sayWhat}</div>
        );
    }
}
