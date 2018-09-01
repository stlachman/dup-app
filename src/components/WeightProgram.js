import React from 'react';
// import React, { Fragment } from 'react'; to use fragment tags, i.e. sibling detectors

class WeightProgram extends React.Component {
    render() {
        return (
            <form className="weight-program">
                <h2>Please Enter a Name for your Program</h2>
                <input type="text" required placeholder="Weight Program Name"/>
                <button type="submit">Create Program</button>
            </form>
        )
    }
}

export default WeightProgram;
