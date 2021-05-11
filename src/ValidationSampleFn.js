import React, { useState } from "react";

var ValidationSampleFn = () => {
  const [password, setPassword] = useState("");
  const [clicked, setClicked] = useState(false);
  const [validated, setValidated] = useState(false);

  let input = React.createRef();

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onClickButton = () => {
    setClicked(true);
    setValidated(password === "0000");

    console.log(input);
    input.focus();
  };

  return (
    <div>
      <input
        ref={(ref) => (input = ref)}
        type="password"
        value={password}
        onChange={onChangePassword}
        className={clicked ? (validated ? "success" : "failure") : ""}
      />

      <button onClick={onClickButton}>검증하기</button>
    </div>
  );
};

export default ValidationSampleFn;
