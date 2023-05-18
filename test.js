const p = {
	name: "js",
	age: 24,
};

// 어떤자료형을 불리언으로 변환
let v = 0;
let b = !!v;
console.log(b, typeof b);

// 객체를 이용해서 switch문처럼 사용하기
const direction = "northd";
const dirKo = {
	north: "북",
	south: "남",
	east: "동",
	west: "서",
};
const r = dirKo[direction] ?? "무효";
console.log(r);
