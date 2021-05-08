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

![img.png](img.png)