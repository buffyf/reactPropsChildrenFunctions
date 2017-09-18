import React, { Component } from 'react';
import '../styles/App.css';
import BaseLayout from "./BaseLayout";
import ParentComponent from "./ParentComponent";

const styles = {
  backgroundStyle: {
    background: "yellow"
  },

};

class App extends Component {
  render() {
    return (
      <div style={styles.backgroundStyle} className="App">
        <BaseLayout>
          <ParentComponent />
        </BaseLayout>
      </div>
    );
  }
}

export default App;
