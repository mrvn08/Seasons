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
    }
    
    //Life Cycle Methods
    
    //It is more appropriate to do data loading in componentDidMount
    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            //To update states, ALWAYS use setState
            position => this.setState({lat: position.coords.latitude, long: position.coords.longitude}),
            err => this.setState({err: err.message})
        );
    }

    componentDidUpdate(){
        console.log("Component updated and rerendered");
    }

    //Render method has to be defined
    render() {
        if(this.state.lat === 'Very High' && this.state.err === ''){
            return (
            <div>
                Loading . . .
            </div>
            );
        }
        else if(this.state.lat === 'Very High' && this.state.err !== ''){
            return (
                <div>
                    Error: {this.state.err}
                </div>
            );    
        }
        return (
            <div>
                Latitude: {this.state.lat}<br/>
                Longitude: {this.state.long}<br/>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));