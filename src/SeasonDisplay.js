import './SeasonDisplay.css';
import React from "react";

const seasonConfig = {
    summer : {
        text: 'Let\'s hit the beach',
        iconName: 'sun'
    },
    winter : {
        text: 'Burr, it\'s cold',
        iconName: 'snowflake'
    }
};

class SeasonDisplay extends React.Component{

    state = { season: this.getSeason(this.props.lat, new Date().getMonth()) };

    getSeason(lat, month){
        if (month > 2 && month < 9){
            return lat > 0 ? "summer" : "winter";
        }
        else return lat <= 0 ? "winter" : "summer";
    }

    render(){
        const {text, iconName} = seasonConfig[this.state.season];
        return (
            <div className={`season-display ${this.state.season}`}>
                <i className = {`icon-left massive ${iconName} icon`} />
                <h1>{text}</h1>
                <i className = {`icon-right massive ${iconName} icon`} />
            </div>
        );
    }
};

export default SeasonDisplay;