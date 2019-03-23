import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    //This function is optional
    constructor(props) {
        //We're extending from React props. this is required
        super(props);
        
        //Initializing State
        this.state = {
            lat: 'Very High',
            long: null
        };
    }

    //Render method has to be defined
    render() {
        window.navigator.geolocation.getCurrentPosition(
            position => console.log(position),
            err => console.log(err)
        );

        return <div>Latitude: {this.state.lat}</div>
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));