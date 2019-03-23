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

        window.navigator.geolocation.getCurrentPosition(
            //To update states, ALWAYS use setState
            position => this.setState({lat: position.coords.latitude}),
            err => console.log(err)
        );
    }

    //Render method has to be defined
    render() {
        return <div>Latitude: {this.state.lat}</div>
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));