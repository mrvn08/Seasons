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
        const icon = this.state.season === "Winter" ? "snowflake" : "sun";
        const text = this.state.season === "Winter" ? "Burr, it's chilly" : "Let's hit the beach";
        return (
            <div>
                <i className = {`${icon} icon`} />
                <h1>{text}</h1>
                <i className = {`${icon} icon`} />
            </div>
        );
    }
};

export default SeasonDisplay;