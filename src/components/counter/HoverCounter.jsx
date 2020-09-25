import React from 'react';
import UpdateCounterComponent from '../counter/UpdateCounter';


class HoverCounter extends React.Component {
    render(){
        const {increment, counter} = this.props;
        return (
        <h2 onMouseOver={increment}> {counter}Increment {this.props.name}</h2>
        );
    }
}

export default UpdateCounterComponent(HoverCounter);