import React, { useState } from "react";

const EventPracticeFn = () => {
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
  const onChangeUsername = (e) => setUsername(e.target.value);
  const onChangeMessage = (e) => setMessage(e.target.value);
  const onClick = () => {
    alert(username + ": " + message);
    setUsername("");
    setMessage("");
  };
  const onKeypress = (e) => {
    if (e.key === "Enter") {
      onClick();
    }
  };

  return (
    <div>
      <h1>이벤트 연습</h1>
      <input
        type="text"
        name="username"
        placeholder="사용자명"
        value={username}
        onChange={onChangeUsername}
      />
      <input
        type="text"
        name="message"
        placeholder="아무거나 입력하시오"
        value={message}
        onKeyPress={onKeypress}
        // onChange={(e) => {
        //   this.setState({
        //     message: e.target.value,
        //   });
        //   console.log(e.target.value);
        // }}
        onChange={onChangeMessage}
      />
      <button
        // onClick={() => {
        //   alert(this.state.message);
        //   this.setState({
        //     message: "",
        //   });
        // }}
        onClick={onClick}
      >
        확인
      </button>
    </div>
  );
};

export default EventPracticeFn;