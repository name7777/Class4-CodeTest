/* 동기를 표현하기 위한 3가지 방법
 * 1) Callback
 * 2) Promise
 * 3) async/await
 */

// Callback 예제
// 1)
function avante(callback) {
    console.log("아반떼 go");
    callback();
}

function sonata(callback) {
    console.log("소나타 go");
    callback();
}

function genesis() {
    console.log("제네시스 go")
}


function Callback() {
    avante(() => {
        sonata(() => {
            genesis()
        })
    })
};

Callback()

// 2)
function Callback2(callback,a,b) {
    callback(a, b);
}

function sum(a, b) {
    console.log(a+b);
}

Callback2(sum, 5, 12);

// 3)
function Third() {
    function temp() {
        console.log("temp 함수 실행")
    }
    return temp
}

function Callback3(callback) {
    callback();
}

Callback3(Third());


// Promise 예제
// 1) Promise 객체 생성
function proms(callback) {
    return new Promise((resolve, reject) => { // new Promise 객체는 기본적으로 백그라운드 영역에 들어감. 즉, 콜백이라는 소리임
        setTimeout(() => {
            resolve("proms")
        }, 1000)
    })
}

function proms2() {
    return new Promise((resolve, reject) => { // new Promise 객체는 기본적으로 백그라운드 영역에 들어감. 즉, 콜백이라는 소리임
        setTimeout(() => {
            resolve("proms2")
        }, 1000)
    })
}

function proms3() {
    return new Promise((resolve, reject) => { // new Promise 객체는 기본적으로 백그라운드 영역에 들어감. 즉, 콜백이라는 소리임
        setTimeout(() => {
            resolve("proms3")
        }, 1000)
    })
}

function proms4() {
    return new Promise((resolve, reject) => { // new Promise 객체는 기본적으로 백그라운드 영역에 들어감. 즉, 콜백이라는 소리임
        setTimeout(() => {
            resolve("proms4")
        }, 1000)
    })
}
// 2) Promise 객체 받아오기 => then으로 위에 resolve 안에 있는 값을 받아온다
proms().then((data) => {
    console.log(data);
    return proms2();
})
.then((data) => {
    console.log(data);
    return proms3();
})
.then((data) => {
    console.log(data);
    return proms4();
})


// async/await 예제
async function asyncFn() {
    const result2 = await proms2()
    console.log(result2);
    const result3 = await proms3()
    console.log(result3);
    const result4 = await proms4()
    console.log(result4);
}

asyncFn();