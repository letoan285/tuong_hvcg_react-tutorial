import React from 'react';
import ClickCounter from '../../components/counter/ClickCounter';
import HoverCounter from '../../components/counter/HoverCounter';
import { connect } from 'react-redux';
import { countDown, countUp} from '../../redux/actions/counter.action';

import { bindActionCreators } from 'redux';


class Counters extends React.Component {
    componentDidMount(){
        console.log('reducer', this.props.propsData);
    }
    handleCountUp = () => {
        this.props.countUp();
    }
    handleCountDown = () => {
        this.props.countDown();
    }
    render(){
        const {counter}=this.props.propsData;
        return (
            <div className="container mt-5">
                <h3>Count {counter}</h3>
                <div>
                <button className="btn btn-success" onClick={this.handleCountUp}>Count Up</button> --
                    <button className="btn btn-danger" onClick={this.handleCountDown}>Count Down</button>
                </div>
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
const mapStateToProps = (state) => {
    return {
        propsData: state
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators(
    {
        countDown,
        countUp
    },
    dispatch
)

export default connect(mapStateToProps, mapDispatchToProps)(Counters);
// Higher Order Component