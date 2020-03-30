import React from "react";
import MediaList from './MediaList';
import "../styles/App.scss";



class App extends React.Component {
constructor(props) {
  super(props);
}
  render() {
    return (
      <div className="App">
        <MediaList
        />
      </div>
    );
  }
}

export default App;

