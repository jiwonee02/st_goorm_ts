// any
let anyVar: any = 10;
anyVar = "hello";
anyVar = true;
anyVar = {};
anyVar = () => {};

// anyVar.toUpperCase();
// anyVar.toFixed();

let num: number = 10;
num = anyVar; // 모든 타입의 변수에 any 타입의 값을 집어넣을 수 있음(반대도 가능)

// unknown
let unknowVar: unknown;

unknowVar = "";
unknowVar = 1;
unknowVar = () => {};

// num = unknowVar ➡️ 모든 타입의 변수에 unknown 타입의 값을 집어넣을 수 없음
// unknowVar.toUpperCase(); ➡️ 모든 타입의 메소드 사용 불가(연산 불가)
if (typeof unknowVar === "number") {
    num = unknowVar;
}
