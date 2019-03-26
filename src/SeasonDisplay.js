import React from "react";

const getSeason = (lat, month) => {
    if (month > 2 && month < 9){
        return lat > 0 ? "Summer" : "Winter";
    }
    else return lat <= 0 ? "Winter" : "Summer";
}

class SeasonDisplay extends React.Component{

    state = { season: getSeason(this.props.lat, new Date().getMonth()) };

    render(){
        console.log(this.state.season);
        return <div>Latitude = {this.props.lat}</div>
    }
};

export default SeasonDisplay;