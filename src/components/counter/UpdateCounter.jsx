import React, {Component } from 'react';

const UpdateCounterComponent = (OriginComponent) => {
    class NewComponent extends Component {
        constructor(){
            super();
            this.state = {
                counter: 0
            }
        }
        incrementCounter = () => {
            this.setState(preve => {
                return {
                    ...preve,
                    counter: preve.counter+1
                }
            })
        }
       render(){
           return <OriginComponent {...this.props} increment={this.incrementCounter} counter={this.state.counter} name="Le Van Toan"/>
       } 
    }
    return NewComponent;
}

export default UpdateCounterComponent;