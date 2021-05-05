import logo from "./logo.svg";
import React, { Fragment } from "react"; // Fragment기능을 사용
import "./App.css";

function App() {
  const name = "리액트";
  return (
    <Fragment>
      {" "}
      {/* h1에 부모요소인 div가 있어야함 div를 쓰고싶지 않다면 리액트 v16 이상부터 도입된 Fragment기능을 사용 */}
      {/* {name != '호스타' ? (<h1>리액트 입니다.</h1>) : (<h1>{name} 안녕?</h1>)} 엘리먼트에 if문이 없으므로 연산자로 사용 */}
      <form>
        성:<input></input>
        <br />
        이름:<input></input>
        <br /> {/* 리액트에서는 인풋태그를 꼭 닫아줘야함 */}
      </form>
      <div className="react">{name}</div>
    </Fragment>
  );
}

export default App;
