function func(a: number, b: number): number {
    return a + b;
}

// 화살표 함수의 타입 정의
const add = (a: number, b: number): number => a + b;

// 함수의 매개변수
function introduce(name = "한지원", tall?: number) {
    console.log(`name: ${name}`);
    if (typeof tall === "number") {
        console.log(`tall: ${tall}`);
    }
}

introduce("한지원", 180);
introduce("한지원");

function getSum(...rest: number[]) {
    let sum = 0;
    rest.forEach((it) => (sum += it));

    return sum;
}

getSum(1, 2, 3);
getSum(1, 2, 3, 4, 5);
