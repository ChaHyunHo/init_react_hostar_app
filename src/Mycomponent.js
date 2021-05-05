import React from "react";

// 새로운 컴포넌트 추가연습
// props는 properties의 줄인 표현으로 컴포넌트 속성을 설정할때 사용하는 요소이다.
const Mycomponent = props => {
  return <div className="react">새로운 컴포넌트 생성 연습 props name: {props.name}</div>;
};

export default Mycomponent;
