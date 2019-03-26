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
const getSeason = (lat, month) => {
    if (month > 2 && month < 9){
        return lat > 0 ? "summer" : "winter";
    }
    else return lat <= 0 ? "winter" : "summer";
}

class SeasonDisplay extends React.Component{

    state = { season: getSeason(this.props.lat, new Date().getMonth()) };

    render(){
        const {text, iconName} = seasonConfig[this.state.season];
        return (
            <div>
                <i className = {`${iconName} icon`} />
                <h1>{text}</h1>
                <i className = {`${iconName} icon`} />
            </div>
        );
    }
};

export default SeasonDisplay;