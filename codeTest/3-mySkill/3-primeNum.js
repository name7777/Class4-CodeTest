/*
    <문제>
    주어진 숫자 중 3개의 수를 더했을 때 소수가 되는 경우의 개수를 구하려고 합니다.
    숫자들이 들어있는 배열 nums가 매겨변수로 주어질 때, nums에 있는 숫자들 중
    서로 다른 3개를 골라 더했을 때 소수가 되는 경우의 개수를 return 하도록 함수를 완성하라.

    제한사항
    - nums에 들어있는 숫자의 개수를 3개 이상 50개 이하
    - nums의 각 원소는 1 이상 1,000 이하의 자연수이며, 중복된 숫자는 들어있지 않다


    <접근 방법>
    - 가장 먼저 이렇게 문제가 길 때는 최대한 쪼개서 함수든 배열이든 나눠서 생각한다
*/

solution([1, 2, 3, 4]);

function checkPrimeNum(num) {
    for(let i = 2; i < num; i++) {
        if (num % i == 0) {
            return false;
        }
    }
    
    return true;
}

function solution(nums) {
    let sumNumber = 0;
    let result = 0;

    // 1) 숫자 n개에서 3개 씩 더하는 코드
    for(let i = 0; i < nums.length; i++) {
       for(let j = i + 1; j < nums.length; j++) {
           for(let k = j + 1; k < nums.length; k++) {
               sumNumber = nums[i] + nums[j] + nums[k];
               if (checkPrimeNum(sumNumber)) {
                   result++;
               }
           }
       }
    }

    // 2) 그 숫자를 소수인지 판단하는 코드
    console.log(result);
    return result;
}