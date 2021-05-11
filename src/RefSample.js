import React, { Component } from "react";

// class RefSample extends Component {
//     input = React.createRef;
//
// }

var RefSample = () => {
  let input = React.createRef();

  const handleFocus = () => {
    input.current.focus();
  };
  return (
    <div>
      <input ref={input} />
    </div>
  );
};

export default RefSample;
