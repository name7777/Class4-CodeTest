function solution(a1, a2, a3, s1, s2, s3) {
    let abs = [a1, a2, a3];
    let sol = [s1, s2, s3];
    let S1, S2, S3;

    if(s1 == true) {
        S1 = 1
    }
    else S1 = -1;
    
    if(s2 == true) {
        S2 = 1
    }
    else S2 = -1;
    
    if(s3 == true) {
        S3 = 1
    }
    else S3 = -1;

    let result = (a1 * S1) + (a2 * S2) + (a3 * S3);

    console.log("abs : ", abs);
    console.log("sol : ", sol);
    console.log("result : ", result);
};

solution(1, 2, 3, true, false, false);