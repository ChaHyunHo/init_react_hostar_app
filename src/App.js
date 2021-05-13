import React, { Component } from "react"; // Fragment기능을 사용
import "./App.css";
import Mycomponent from "./Mycomponent";
import PropTypes from "prop-types";
import Counter from "./Counter";
import Say from "./Say";
import EventPractice from "./EventPractice";
import EventPracticeFn from "./EventPracticeFn";
import ValidationSample from "./ValidationSample";
import ValidationSampleFn from "./ValidationSampleFn";
import RefSample from "./RefSample";
import ScrollBox from "./ScrollBox";
import IterationSample from "./IterationSample";
import IterationSampleFn from "./IterationSampleFn";

// const App = () => {
//   return <ValidationSampleFn></ValidationSampleFn>;
// };

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <ScrollBox ref={(ref) => (this.scrollBox = ref)} />
//         <button onClick={() => this.scrollBox.scrollToBottom()}>맨밑으로</button>
//       </div>
//     );
//   }
// }

class App extends Component {
    render() {
        return (
          <IterationSampleFn/>
        );
    }
}

// function App() {
//   const name = "리액트";
//   return (
//     <Fragment>
//       {" "}
//       {/* h1에 부모요소인 div가 있어야함 div를 쓰고싶지 않다면 리액트 v16 이상부터 도입된 Fragment기능을 사용 */}
//       {/* {name != '호스타' ? (<h1>리액트 입니다.</h1>) : (<h1>{name} 안녕?</h1>)} 엘리먼트에 if문이 없으므로 연산자로 사용 */}
//       <form>
//         성:<input></input>
//         <br />
//         이름:<input></input>
//         <br /> {/* 리액트에서는 인풋태그를 꼭 닫아줘야함 */}
//       </form>
//       <div className="react">{name}</div>
//     </Fragment>
//   );
// }

export default App;
