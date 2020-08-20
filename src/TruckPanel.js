import React from 'react';
import Checkbox from './Checkbox';

class TruckPanel extends React.Component {
    render() {
        return (
            <div>
                <Checkbox />
                <h1>this truck is named {this.props.name}</h1>
            </div>
        );
    }
}

export default TruckPanel;