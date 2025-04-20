// 배열
let numArr = [1, 2, 3];
let strArr = ["hello", "i'm", "jiwonee"];
let boolArr = [true, false, true];
// 배열에 들어가는 요소들의 타입이 다양할 경우
let multiArr = [1, "hello"];
// 다차원 배열의 타입을 정의하는 방법
let doubleArr = [
    [1, 2, 3],
    [4, 5],
];
// 튜플
let tup1 = [1, 2];
// tup1 = [1, 2, 3]; ➡️ 길이가 다르면 오류
// tup1 = ["1", "2"]; ➡️ 타입을 만족하지 못하면 오류
let tup2 = [1, "2", true];
export {};
// tup2 = ["2", 1, true] ➡️ 순서가 바뀌면 오류
