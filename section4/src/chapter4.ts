// 오버로드 시그니처
function func(a: number): void;
function func(a: number, b: number, c: number): void;

// 구현 시그니처
function func(a: number, b?: number, c?: number) {
    if (typeof b === "number" && typeof c === "number") {
        console.log(a + b + c);
    } else {
        console.log(a * 20);
    }
}

// func(); ➡️ 오버로드 시그니처를 미리 만들었기 때문에
func(1);
// func(1,2); ➡️ 오버로드 시그니처를 미리 만들었기 때문에
func(1, 2, 3);
