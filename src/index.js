import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from  './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {
    //This function is optional
    // constructor(props) {
    //     //We're extending from React props. this is required
    //     super(props);
        
    //     //Initializing State
    //     this.state = {
    //         lat: 'Very High',
    //         long: 'I think east or something',
    //         err: ''
    //     };
    // }
    
    //Alternate way of initializing state
    state = {
        lat: 'Very High',
        long: 'I think east or something',
        err: ''
    };

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

    renderContent(){
        if(this.state.lat === 'Very High' && this.state.err === ''){
            return <Spinner text="Please allow us to know your location"/>;
        }
        else if(this.state.lat === 'Very High' && this.state.err !== ''){
            return <div>Error: {this.state.err}</div>;
        }
        return <SeasonDisplay lat={this.state.lat} long={this.state.long}/>
    }

    //Render method has to be defined
    render() {
        return (
            <div className="redBorder">
                {this.renderContent()}
            </div>
        ); 
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));