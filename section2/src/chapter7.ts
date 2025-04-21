// void

function func1(): string {
    return "hello";
}

function func2(): undefined {
    console.log("hello");
    return;
}

let a: void;
// a = 1;
// a = "hello";
// a = {};
// a = null; ➡️ strictNullChecks를 끄면 예외적으로 할당 가능
a = undefined;

// never
function func3(): never {
    while (true) {}
}

function func4(): never {
    throw new Error();
}

let b: never;
// b = 1;
// b = {};
// b = "";
// b = undefined;
// b = null; ➡️ strictNullChecks를 꺼도 불가능

// let anyVar: any;
// b = anyVar; ➡️ any 타입도 불가능
