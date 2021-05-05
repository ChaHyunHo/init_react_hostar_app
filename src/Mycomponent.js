import React from "react";
import PropTyeps from "prop-types";

// 새로운 컴포넌트 추가연습
// props는 properties의 줄인 표현으로 컴포넌트 속성을 설정할때 사용하는 요소이다.
const Mycomponent = ({ name, children }) => {
  // 비구조화 할당 문법 외 바로 객체형태로 적용해도됨
  // const { name, children } = props; 비구조화 할당 문법 , 매번 키원드 앞에 props라는 키워드를 붙여주지 않아도 된다.
  return (
    <div className="react">
      새로운 컴포넌트 생성 연습 props name: {name} <br />
      해당 컴포넌트 태그 사이에 작성된값 : {children} <br />
    </div>
  );
};

Mycomponent.defaultProps = {
  name: "Hi",
};

Mycomponent.prototype = {
  name: PropTyeps.string,
};

export default Mycomponent;
