import React, { useState } from "react";

// useState 사용
const Say = () => {
  //클래스형 컴포넌트 state초기값을 객체형태로 초기화 시켜야 된다고 했지만 useState는 객체가 아니어도 됨
  const [message, setMessage] = useState("");
  const onClickEnter = () => setMessage("안녕하세요?");
  const onClickLeave = () => setMessage("안녕히 가세요!");

  const [color, setColor] = useState("black");

  const [object1, setObject1] = useState({ name: "", number: 0 });
  const sobj = () => setObject1.name("이것이 객체다.");

  // 배열이나 객체를 업데이트해야할 때
    const obj1 = {a:1, b:2, c:3};
    const nextObj = {...obj1, b: 5, a:2};

    console.log(nextObj);

    const arr = [
        { id : 1, value : true }
        , { id : 2, value : true }
        , { id : 3, value : true }
        , { id : 4, value : true }
    ]

    let arr2 =  arr.concat({id:5});
    arr2.filter( i => i.id !== 2);
    arr2 = arr2.map( i => i.id == 1 ? {...i, value : false} : i);
    console.log(arr2);

  return (
    <div>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <h1 style={{ color: color }}>{message}</h1>
      <button style={{ color: "red" }} onClick={() => setColor("red")}>
        빨간색
      </button>
      <button style={{ color: "green" }} onClick={() => setColor("green")}>
        초록
      </button>
      <button style={{ color: "blue" }} onClick={() => setColor("blue")}>
        파란색
      </button>
      <br />
      객체테스트 :{sobj.name}, {object1.number}
    </div>
  );
};

export default Say;
