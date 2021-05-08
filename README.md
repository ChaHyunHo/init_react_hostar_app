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