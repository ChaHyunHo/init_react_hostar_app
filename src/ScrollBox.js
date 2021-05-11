import React from "react";

var ScrollBox = () => {
  let box = React.createRef;

  const style = {
    border: "1px solid black",
    height: "300px",
    overflow: "auto",
    position: "relative",
  };

  const innerStyle = {
    width: "100%",
    height: "650px",
    background: "linear-gradient(white, black)",
  };

  const scrollToBottom = () => {
    const { scrollHeight, clientHeight } = box;

    box.scrollTop = scrollHeight - clientHeight;
  };

  return (
    <div
      style={style}
      ref={(ref) => {
        box = ref;
      }}
    >
      <div style={innerStyle} />
    </div>
  );
};

export default ScrollBox;
