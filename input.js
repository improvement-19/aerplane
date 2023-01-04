const PRETESTS = [
    [2,1,2,3,1],
    [1,6,3,4,5,0,0,0,6]
    //Time complexity : O(n) as we are iterating the array only once , space complexity : o(1) as we are not using any extra space 
];

const minimumAirplanes = (airports) => {
    let reachedTill = 0;           //current index till which i can reach 
    let maxReach = 0;             //maximum index upto which airplanes can reach 
    let airplanesUsed = 0;         //minimum number of airplanes needed 
    for (let i = 0; i < airports.length - 1; i++) {     //for loop will run till length-1 as we want to reach last index 
        if (i + airports[i] > maxReach) { 
            maxReach = i + airports[i]; 
        } 
        if (i === reachedTill) {
            airplanesUsed++; 
            reachedTill = maxReach; 
        }
    }
    return (reachedTill < airports.length -1 ? -1 : airplanesUsed);    //if we cannot reach to last index return -1 
};

const main = () => {
    for (const test of PRETESTS) {
        console.log('Running on test...', test); 
        console.log(`Minimum number of airplanes needed: ${minimumAirplanes(test)}`);
    }
};
main();