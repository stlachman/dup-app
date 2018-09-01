import React from 'react';

const Header = props => (
    <header className="top">
        <h1>Lift Some Weights</h1>
        <h3 className="tagline">
            <span>{props.subTitle}</span>
        </h3>
    </header>
);

export default Header;