import React, { Component } from "react";
import PropTypes from "prop-types";

// 새로운 컴포넌트 추가연습
// props는 properties의 줄인 표현으로 컴포넌트 속성을 설정할때 사용하는 요소이다.
// const Mycomponent = ({ name, favoriteNumber, children }) => {  // 함수형
//   // 비구조화 할당 문법 외 바로 객체형태로 적용해도됨
//   // const { name, children } = props; 비구조화 할당 문법 , 매번 키원드 앞에 props라는 키워드를 붙여주지 않아도 된다.
//   return (
//     <div className="react">
//       새로운 컴포넌트 생성 연습 props name: {name} <br />
//       해당 컴포넌트 태그 사이에 작성된값 : {children} <br />
//       <br />
//       제가 좋아하는 숫자는 {favoriteNumber} 입니다.
//     </div>
//   );
// };

// props는 컴포넌트가 사용되는 과정에서 부모 컴포넌트가 설정하는 값이며, 컴포넌트 자신은 해당 props를 읽기 전용으로만 사용할 수 있다.
// props를 바꾸려면 부모에서 바꾸어 주어야한다. MyComponent에서는 부모에게 전달받은 name을 바꿀수 없다.

// class형
class Mycomponent extends Component {
  // class 내부에서도 props의 기본값 설정이 가능
  static defaultProps = {
    name: "기본 이름",
  };
  render() {
    const { name, favoriteNumber, children } = this.props; // 비구조 할당

    return (
      <div className="react">
        새로운 컴포넌트 생성 연습 props name: {name} <br />
        해당 컴포넌트 태그 사이에 작성된값 : {children} <br />
        <br />
        제가 좋아하는 숫자는 {favoriteNumber} 입니다.
      </div>
    );
  }
}

// Mycomponent.defaultProps = {
//   name: "Hi",
// };

Mycomponent.propTypes = {
  name: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired,

  //  propsTypes 설정 더 자세한 사항 참조 > https://github.com/facebook/prop-types
};

export default Mycomponent;
