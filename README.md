# 배열 비구조화 할당

~~~
* 배열 안에 들어 있는 값을 쉽게 추출할 수 있도록 해주는 문법

ex) const {name, number} = this.state; // 객체 비구조화 할당과 비슷

const array = [1, 2];
const one = array[0]; // 기존 방식
const two = array[1]; // 기존 방시

// 배열 비구조화 
const [one, two] = array;

~~~

IMG_B52622882ABF-1.jpeg![image](https://user-images.githubusercontent.com/38008152/117544339-ef67c580-b05b-11eb-94aa-4e54977f8190.png)

~~~
props는 부모 컴포넌트가 설정하고 , state는 컴포넌트 자체적으로 지닌 값으로 컴포넌트 
내부에서 값을 업데이트할 수 있다. 
props를 사용한다고 값이 무조건 고정적인건 아니고 부모 컴포넌트의 state를 자식 컴포넌테
props로 전달하고, 자식 컴포넌트에서 특정 이벤트가 발생할 때 부모 컴포넌트의 메서드를 호출하면
props도 유동적으로 사용 가능하다.
~~~


# 라이프사이클 메서드

##### 용어정리
    1. 마운트: 페이지에 컴포넌트가 나타남 
    2. 업데이트: 컴포넌트 정보를 업데이트 
    3. 언마운트: 페이지에서 컴포넌트가 사라짐

=============================================================
 1.  render() 메서드
~~~
 - 라이프 사이클 메서드중 유일한 필수 메서드
 - 이 메서드 안에서 this.props와 this.state에 접근할 수 있음
 - 아무것도 보여 주고 싶지 않다면 null 값이나 false값을 반환
 - 이 메서드 안에서 이벤트 설정이 아닌 곳에서 setState를 사용하면 안됨
 - 부라우저의 DOM에 접근안됨
 - DOM정보를 가져오거나 state 변화를 줄때 componentDidMount에서 처리 
~~~
     
 2.  constructor 메서드
~~~
 - 컴포넌트 생성자 메서드
 - 메서드 초기 state를 정할 수 있음
~~~

 3.  getDerivedStateFromProps 메서드
~~~
 - v16.3 이후 새로 만든 라이프사이클
 - props로 받아 온 값을 state에 동기화시키는 용도로 사용
 - 컴포넌트가 마운트 될때와 업데이트될 때 호출

~~~

 4. componentDidMount 메서드
~~~
 - 컴포넌트를 만들고, 첫 렌더링을 다 마친 후 실행
 - 다른 자바스크립트 라이브러리 또는 프레임워크의 함수를 호출하거나 이벤트 등록 setTimeout, setInterval, 
   네트워크 요청 같은 비동기 작업을 처리한다.
~~~

 5. shouldComponentUpdate 메서드
~~~
 - props 또는 state를 변경했을때, 리렌더링을 시작할지 여부를 지정하는 메서드
 - 이 메서드는 반드시 true 값 또는 false 값을 반환해야 한다.
 - 컴포넌트 생성시 메서드를 따로 생성하지 않으면 기본적으로 true 값을 반환
 - 메서드가 false 값을 반환한다면 업데이트 과정은 중지
 - 메서드 안에서 현재 props와 state는 this.props와 this.state로 접근
 - 새로 설정될 props 또는 state는 nextProps와 nextState로 접근할 수 있음
 - 프로젝트 성능 최적화할 때, 상황에 맞는 알고리즘을 작성하여 리렌더링을 방지할 때는 fasle 값을 반환
~~~

 6. getSnapshotBeforeUpdate 메서드
~~~
 - v16.3 이후 생성
 - render에서 만들어진 결과물이 브라우저에 실제로 반영되기 직전에 호출
 - 이 메서드에서 반환하는 값은 componentDidUpdate에서 세 번째 파라미터인 snapshot 값으로 전달받을 수 있음
 - 주로 업데이트 하기 직적의 값을 참고할때 활용
~~~

 7. componentDidUpdate 메서드
~~~
 - 리렌더링을 완료한 후 실행
 - 업데이트가 끝난 직후이므로, DOM 관련 처리를 해도 무방
 - prevProps 또는 prevState를 사용하여 컴포넌트가 이전에 가졌던 데이터에 접근 가능
 - getSnapshotBeforeUpdate에서 반환한 값이 있다면 여기서 snapshot 값을 전달 받을수 있음
~~~

 8. componentWillUnmount 메서드
~~~
 - 컴포넌트를 DOM에서 제거할 때 실행
 - componentDidMount에서 등록한 이벤트, 타이머, 직접 생성한 DOM이 있다면 여기서 제거 작업을 해야함
~~~

 9. componentDidCatch 메서드
~~~
 - v16에서 새롭게 도입
 - 컴포넌트 렌더링 도중에 에러가 발생했을 때 애플리케이션 먹통이 되지 않고 오류 UI를 보여줄수 있게 해줌
~~~

=============================================================