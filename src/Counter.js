import React, { Component } from "react";

// state사용
class Counter extends Component {
  // constructor(props) {
  //   super(props); // 이 함수가 호출되면 현재 글래스형 컴포넌트가 상속받고 있는 리액트의 Component클래스가 지닌 생성자 함수를 호출해준다.
  //
  //
  // }

  // state 초기값 설정
  state = {
    number: 0,
    fixedNumber: 0,
  };

  render() {
    const { number, fixedNumber } = this.state; // state를 조회할 때는 this.state로 조회

    return (
      <div>
        <h1>{number}</h1>
        <h2>바뀌지 않는 값 : {fixedNumber} </h2>

        <button
          onClick={() => {
            this.setState(
              (prevState) => {
                return {
                  // 아래와 똑같음 다만 아래는 함수에서 바로 객체를 반환한다는 의미임
                  number: prevState.number + 1,
                };
              },
              () => { // this.setState 작업이 끝나고 득정 작업 실행시
                console.log("setState 호출");
                console.log(this.state);
              }
            );

            this.setState((prevState) => ({
              number: prevState.number + 1,
            }));
            // this.setState를 사용하여 state에 새로운 값을 넣을 수 있음
            // this.setState({ number: number + 1 });
            // this.setState({ number: this.state.number + 1 });
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default Counter;
