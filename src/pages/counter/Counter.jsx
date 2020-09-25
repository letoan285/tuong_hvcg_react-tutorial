import React from 'react';
import ClickCounter from '../../components/counter/ClickCounter';
import HoverCounter from '../../components/counter/HoverCounter';

class Counters extends React.Component {
    render(){
        return (
            <div className="container mt-5">
               <div>
                   <ClickCounter myName="Nguyen Tuong"/>

               </div>
               <div>
                   <HoverCounter />
                   
               </div>
            </div>
        );
    }
}

export default Counters;
// Higher Order Component