import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    window.navigator.geolocation.getCurrentPosition(
        (position) => console.log(position),
        (err) => console.log(err)
    );

    return (
        <div>Hello World!</div>
    );
}

ReactDOM.render(<App/>, document.getElementById('root'));