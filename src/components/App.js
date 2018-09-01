import React from 'react';
import Header from './Header';
import LogBook from './LogBook';
import Notes from './Notes';

class App extends React.Component {
    render() {
        return(
            <div className="weight-training">
                <div className="menu">
                    <Header subTitle="Light Weight" />
                </div>
                <LogBook />
                <Notes />
            </div>
        )
    }
}

export default App;