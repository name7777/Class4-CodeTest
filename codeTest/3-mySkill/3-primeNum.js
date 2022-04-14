function primeNum(a, b, c) {
    let count = 0;
    
    for(var i = 2; i <= a; i++) {
        if(a % i === 0) {
            console.log(false);
        }
        else count += 1;
    }

    // for(var i = 2; i <= a+b; i++) {
    //     if(a % i === 0) {
    //         console.log(false);
    //     }
    //     else count += 1;
    // }

    // for(var i = 2; i <= a+c; i++) {
    //     if(a % i === 0) {
    //         console.log(false);
    //     }
    //     else count += 1;
    // }

    // for(var i = 2; i <= b+c; i++) {
    //     if(a % i === 0) {
    //         console.log(false);
    //     }
    //     else count += 1;
    // }

    // for(var i = 2; i <= a+b+c; i++) {
    //     if(a % i === 0) {
    //         console.log(false);
    //     }
        // else count += 1;
    // }

    

    console.log("count : ", count);
}

primeNum(2, 3, 4);