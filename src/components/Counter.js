import React from "react";
import { connect } from "react-redux";
import { increment, decrement } from "../JS/actions/actionCounter";

const Counter = (props) => {
  return (
    <div>
      <button onClick={props.increment}>+</button>
      <h2>{props.counter}</h2>
      <button onClick={props.decrement}>-</button>
    </div>
  );
};



const mapStateToProps = (state) => {
  return {
    counter: state.reducerCounter.counter,
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: () => dispatch(increment()),
//   };
// };

const mapDispatchToProps={
    increment,
    decrement
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
// export default connect(mapStateToProps, {increment, decrement})(Counter);
