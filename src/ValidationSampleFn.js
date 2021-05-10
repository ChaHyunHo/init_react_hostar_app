import React, { useState } from "react";

var ValidationSampleFn = () => {
  const [password, setPassword] = useState("");
  const [clicked, setClicked] = useState(false);
  const [validated, setValidated] = useState(false);

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onClickButton = () => {
    setClicked(true);
    setValidated(password === '0000');
  };

  return (
    <div>
      <input
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
