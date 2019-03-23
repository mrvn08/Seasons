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
            long: 'I think east or something',
            err: ''
        };

        window.navigator.geolocation.getCurrentPosition(
            //To update states, ALWAYS use setState
            position => this.setState({lat: position.coords.latitude, long: position.coords.longitude}),
            err => {
                this.setState({err: err.message});
            }
        );
    }

    //Render method has to be defined
    render() {
        return (
            <div>
                Latitude: {this.state.lat}<br/>
                Longitude: {this.state.long}<br/>
                Error: {this.state.err}
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));