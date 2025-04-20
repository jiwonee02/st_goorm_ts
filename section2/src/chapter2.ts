// 배열
let numArr: number[] = [1, 2, 3];
let strArr: string[] = ["hello", "i'm", "jiwonee"];
let boolArr: Array<boolean> = [true, false, true];

// 배열에 들어가는 요소들의 타입이 다양할 경우
let multiArr: (number | string)[] = [1, "hello"];

// 다차원 배열의 타입을 정의하는 방법
let doubleArr: number[][] = [
    [1, 2, 3],
    [4, 5],
];

// 튜플
let tup1: [number, number] = [1, 2];
let tup2: [number, string, boolean] = [1, "2", true];

// tup1 = [1, 2, 3]; ➡️ 길이가 다르면 오류
// tup1 = ["1", "2"]; ➡️ 타입을 만족하지 못하면 오류
// tup2 = ["2", 1, true] ➡️ 순서가 바뀌면 오류

tup1.push(1);
tup1.pop();
tup1.pop();
tup1.pop();

const users: [string, number][] = [
    ["김구름", 1],
    ["김덕성", 2],
    ["김덕구", 3],
    ["김한입", 4],
    // [5, "김타입"] ➡️ 순서가 바뀌면 오류
];
