import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// class Component {
//   constructor (a) {
//     this.props = a;
//   }
// }

class Box extends Component {
  state = {
    className:"btn btn-danger p-2"
  }

    constructor (props) {
        super(props);
    }

    // constructor({ num, id, onDelete, onIncrement, onDecrement }) {
    //   super();
    //   this.state = {
    //     className:'btn btn-danger',
    //     number: num,
    //     id:id,
    //     onDelete:onDelete,
    //     onIncrement:onIncrement,
    //     onDecrement:onDecrement
    //   };
    // }

    increment = () => {
      this.props.onIncrement( this.props.id );
        // const newNumber = this.state.number + 1;
        // const newState = {number:newNumber, className:'btn btn-danger'};
        // this.setState(newState);
      }
  
      decrement = () => {
        this.props.onDecrement( this.props.id );
        // const newNumber = this.state.number - 1
        // const newState = {number:newNumber };
        // this.setState(newState);
      }

      // decrement = () => {
      //   const number = this.state.number;
  
      //   if (number === 0) {
      //     const newClassName = "btn btn-secondary";
      //     const newState = { number: this.state.number, className: newClassName};
      //     this. setState(newState);
  
      //   }
      //   else {
      //     const newNumber = this.state.number - 1
      //     const newState = {number:newNumber };
      //     this.setState(newState);
  
      //   }
      // }

      delete = () => {
        const { id } = this.props;
        this.props.onDelete(id);
      }
  
    render() { 
        return (
            <div>
              <button type="button" className={this.state.className} onClick={this.decrement} > Decrement </button>
              <span className="p-2">{this.props.num}</span>
              <button type="button" className="btn btn-primary" onClick={this.increment}> Increment </button>
              <button type="button" className="btn btn-danger  p-2 ms-2" onClick={ this.delete }> Delete </button>
          </div>
        );
    }
}
 
export default Box;