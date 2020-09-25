import React from 'react';
import UpdateCounterComponent from '../counter/UpdateCounter';

class ClickCounter extends React.Component {
    
    render(){
        const {name, increment, counter} =this.props;
        console.log(this.props);
        return (
        <button onClick={increment}> {counter} - counter - {this.props.myName}</button>
        );
    }
}

export default UpdateCounterComponent(ClickCounter);